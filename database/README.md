<h1 align="center">Database</h1>

This package houses the PostgreSQL database aspects for our query optimizer. It has the `dss.ddl` and `dss.ri` files which define the tables and constraints among the tables while creating the database. It also contains `clean.py` to preprocess the .tbl files into .csv files for direct copying into the database. The `sample_queries` folder contains some queries to be used for immediate use

## Installation and setup

<br/>1. **Ensure that you have PostgreSQL installed of latest version.**
<br/>2. Go to the [TPC-H](https://github.com/aleaugustoplus/tpch-data) repository and download all these files onto your local system.
<br/>3. Open your terminal, and run the following command to directly preprocess the .tbl file for easy import into the database :
```bash
sed -i '' 's/|$//' /path/to/each/tbl/files
```
and replace the path with each table name downloaded.
<br/> 4. Login to your PostgreSQL CLI and login to your user(postgres) using password(postgres)
<br/> 5. Create database, if not exists, named as `TPC_H`.
<br/> 6. Copy entire contents of dss.ddl` and `dss.ri` into your terminal.
<br/> 7. Run this command to copy the .tbl file and populate the tables defined :
```bash
COPY /table/
FROM '/path/to/table'
DELIMITER '|' 
CSV;
```
Run this for each of the 8 tables defined in the database.
<br/> 8. After this, the database and tables have been defined, now head to the `root` folder and run `yarn start` to run the frontend client and backend server concurrently.
