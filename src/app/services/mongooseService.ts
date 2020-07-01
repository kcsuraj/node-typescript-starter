class MongooseService {
  /**
   * Moongoose model
   */
  model: any;
  /**
   * @description Create an instance of the MongooseService class
   * @param Model {mongoose.model} Mongoose Model to use for the instance
   */
  constructor(model: any) {
    this.model = model;
  }

  /**
   * @description Create a new document on the Model
   * @param body {object} Body object to create the new document with
   * @returns {Promise} Returns the results of the query
   */
  create(body: any) {
    return this.model.create(body);
  }
}

export default MongooseService;
