export const alterTables = `
    ALTER TABLE public."Collections" ALTER COLUMN "date" TYPE timestamp USING "date"::timestamp;
    ALTER TABLE public."Collections" ALTER COLUMN "createdAt" TYPE timestamp USING "createdAt"::timestamp;
    ALTER TABLE public."Collections" ALTER COLUMN "updatedAt" TYPE timestamp USING "updatedAt"::timestamp;
    ALTER TABLE public."Materials" ALTER COLUMN "createdAt" TYPE timestamp USING "createdAt"::timestamp;
    ALTER TABLE public."Materials" ALTER COLUMN "updatedAt" TYPE timestamp USING "updatedAt"::timestamp;
    ALTER TABLE public."Users" ALTER COLUMN "createdAt" TYPE timestamp USING "createdAt"::timestamp;
    ALTER TABLE public."Users" ALTER COLUMN "updatedAt" TYPE timestamp USING "updatedAt"::timestamp;
`