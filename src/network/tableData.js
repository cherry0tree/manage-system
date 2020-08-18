import {request} from './request'

export function fetchData(query){
  return request({
    url: './table.json',
    params: query,
    method: 'get'
  })
}