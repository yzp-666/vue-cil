import Mock from 'mockjs'

const Random = Mock.Random

let data = []

for(let i = 0; i < 20; i ++) {
  let template = {
  	'id': i+1,
  	'date': Random.date(),
  	'name': Random.cname(),
	'sex': Random.cword('男女'),
  	'old': Random.integer(20, 50),
  	'email': Random.email(),
  	'site': Random.county(true)
  }
  data.push(template)
}
console.log(data)
Mock.mock('/data/index', 'get', data)