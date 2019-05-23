import { getJson, patchJson, putJson, postJson, deleteJson } from './baseApi'

export const fetchJobIds = url => getJson(url)