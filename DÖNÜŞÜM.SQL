WITH allactions AS (
    SELECT event.eventdate,
        IFNULL(v.channel, 0) as channel,
        dic.categoryid AS widget_name
    FROM s991_event AS event
        INNER JOIN s991_diceventcategory AS dic ON dic.id = event.kategori
        LEFT JOIN s991_visit AS v ON v.visitid = event.visitid
    WHERE event.eventtype = 10
        AND dic.eventtype = 10
        AND eventtime BETWEEN '2020-12-01 00:00:00' AND '2020-12-31 23:59:59'
        AND (dic.categoryid LIKE '%act-%')
    GROUP BY event.eventdate,
        IFNULL(v.channel, 0),
        dic.categoryid
    UNION
    SELECT event.eventdate,
        v.channel,
        p.value AS widgetname
    FROM s991_event AS event
        INNER JOIN s991_dicpages AS p ON p.id = event.eventname
        INNER JOIN s991_visit AS v ON v.visitid = event.visitid
    WHERE eventtype = 11
        AND (
            eventtime BETWEEN '2020-12-01 00:00:00' AND '2020-12-31 23:59:59'
        )
        AND p.value LIKE 'act-%'
    GROUP BY event.eventdate,
        v.channel,
        p.value
)
SELECT allactions.eventdate,
    allactions.widget_name,
    allactions.channel,
    impressions.impression,
    main_table.click,
    main_table.conversion,
    main_table.revenue
FROM allactions
    LEFT JOIN (
        SELECT event.eventdate,
            dic.categoryid AS widgetname,
            Sum(eventnum1) AS impression,
            IFNULL(v.channel, 0) as channel
        FROM s991_event AS event
            INNER JOIN s991_diceventcategory AS dic ON dic.id = event.kategori
            LEFT JOIN s991_visit AS v ON v.visitid = event.visitid
        WHERE event.eventtype = 10
            AND eventtime BETWEEN '2020-12-01 00:00:00' AND '2020-12-31 23:59:59'
            AND (dic.categoryid LIKE '%act-%')
        GROUP BY event.eventdate,
            dic.categoryid,
            IFNULL(v.channel, 0)
    ) AS impressions ON impressions.eventdate = allactions.eventdate
    AND allactions.widget_name = impressions.widgetname
    AND impressions.channel = allactions.channel
    LEFT JOIN (
        SELECT click.eventdate,
            click.eventname AS widgetname,
            conversion.conversion,
            conversion.revenue,
            click.click,
            click.channel
        FROM (
                SELECT e.eventdate,
                    p.value AS eventname,
                    Count(eventid) AS click,
                    v.channel
                FROM s991_event AS e
                    INNER JOIN s991_dicpages AS p ON p.id = e.eventname
                    INNER JOIN s991_visit AS v ON v.visitid = e.visitid
                WHERE eventtype = 11
                    AND (
                        eventtime BETWEEN '2020-12-01 00:00:00' AND '2020-12-31 23:59:59'
                    )
                    AND p.value LIKE 'act-%'
                GROUP BY e.eventdate,
                    p.value,
                    v.channel
            ) AS click
            LEFT JOIN (
                SELECT e.eventdate,
                    p.value AS eventname,
                    CAST(Sum(e.eventnum1) AS INT) AS conversion,
                    v.channel,
                    Sum(e.eventnum2) AS revenue
                FROM s991_event e
                    INNER JOIN s991_dicpages AS p ON p.id = e.eventname
                    INNER JOIN s991_visit AS v ON v.visitid = e.visitid
                WHERE eventtype = 130
                    AND (
                        eventtime BETWEEN '2020-12-01 00:00:00' AND '2020-12-31 23:59:59'
                    )
                    AND p.value LIKE 'act-%'
                GROUP BY e.eventdate,
                    p.value,
                    v.channel
            ) conversion ON click.eventname = conversion.eventname
            AND click.eventdate = conversion.eventdate
            AND click.channel = conversion.channel
    ) AS main_table ON main_table.widgetname = allactions.widget_name
    AND main_table.eventdate = allactions.eventdate
    AND main_table.channel = allactions.channel