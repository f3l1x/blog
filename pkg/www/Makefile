theme:
	npx tailwind build assets/css/styles.css -o css/tailwind.css

snowpack:
	npx snowpack

babel:
	# npx babel assets/app/blog/index.ts --extensions ".js,.ts" --out-file static/dist/blog.js --watch --verbose --source-maps
	npx babel assets/app/blabs/**/*.ts --extensions ".js,.ts" --out-file static/dist/blabs/blab.js --watch --verbose --source-maps

	#     "start": "yarn run babel & yarn run serve",
    # "serve": "servor dist index.html 8080 --reload",
    # "cp:index": "cp index.html dist/index.html",
    # "babel:dev": "babel src/ --out-dir dist --watch --verbose",
    # "babel:prod": "babel src/ --out-dir dist",
    # "snowpack:dev": "snowpack --dest dist/web_modules --clean",
    # "snowpack:prod": "yarn run snowpack:dev --optimize",
    # "build": "yarn run babel:prod && yarn run cp:index && yarn run snowpack:prod"
