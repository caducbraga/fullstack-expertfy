// create a wrapper for the mysql database 

export interface sqlDbWrapper {
  query(queryString: String, queryConfig?: any[]): Promise<{ rows: any[] }>
  connect(): Promise<void>

}