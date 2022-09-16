FROM mongo AS seed

COPY ./db_seed/account-types.json account-types.json

CMD mongoimport --host mongodb --db transfer-app --collection accounttypes --drop --file /account-types.json --jsonArray
