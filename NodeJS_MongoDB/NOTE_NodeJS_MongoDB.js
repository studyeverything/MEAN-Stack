mongod --config "E:\THLsoft\MEANStack\mongod.cfg" --install
sc.exe create MongoDB binPath= "\"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe\" --service --config=\"E:\THLsoft\MEANStack\mongod.cfg\"" DisplayName= "MongoDB" start= "auto"
net start MongoDB
		Lệnh khác:
			net stop MongoDB
			sc.exe delete MongoDB
			

Các lệnh ở MongoDB
	Login vào mongodb -> mongo
	showdbs
	Create new db or select db exiting -> use <name database> -> sau đó ta có thể làm việc trên daatabase này
	Add -> db.mycol.insert({"name":"Thai"})
	Query -> db.mycol.find()
	
	
	
	https://www.youtube.com/playlist?list=PL6gx4Cwl9DGBMdkKFn3HasZnnAqVjzHn_
	https://www.youtube.com/playlist?list=PLlX6-pGejT7ejO-gv1NpawdpcHyQGiGjj
	https://kipalog.com/posts/NodeJS---require--exports--module-exports
	
	https://kipalog.com/posts/Elasticsearch-search-attachment

	npm install -g express-generator	
	npm install mongodb
	npm install jade --save
		-> --save nghĩa là đăng ký tại package.json
	

https://www.youtube.com/playlist?list=PL55RiY5tL51oGJorjEgl6NVeDbx_fO5jR
		git source https://github.com/mschwarzmueller/nodejs-basics-tutorial	
	http://mongoosejs.com/docs/guide.html
	