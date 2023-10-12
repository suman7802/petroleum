import {prisma} from './db.model';

export async function sales() {
  return prisma.$queryRaw`
    SELECT
      "petroleum_product",
      SUM("sale") AS "total_sales"
    FROM
      "petroleum"
    GROUP BY
      "petroleum_product"
    ORDER BY
      "petroleum_product";
  `;
}

export async function avgSales() {
  return prisma.$queryRaw`
  SELECT
    "petroleum_product",
    CASE
      WHEN "year" BETWEEN '2007' AND '2010' THEN '2007-2010'
      ELSE '2011-2014'
    END AS "year_interval",
      AVG("sale") AS "average_sale"
    FROM
      "petroleum"
    GROUP BY
      "petroleum_product", "year_interval"
    ORDER BY
      "petroleum_product", "year_interval";
  `;
}

export async function highLowSales() {
  const topCountries = await prisma.$queryRaw`
    SELECT
      "country",
      SUM("sale") AS "total_sales"
    FROM
      "petroleum"
    GROUP BY
      "country"
    ORDER BY
      "total_sales" DESC
    LIMIT 3
  `;

  const bottomCountries = await prisma.$queryRaw`
    SELECT
      "country",
      SUM("sale") AS "total_sales"
    FROM
      "petroleum"
    GROUP BY
      "country"
    ORDER BY
      "total_sales" ASC
    LIMIT 3
  `;

  return {
    topCountries,
    bottomCountries,
  };
}
