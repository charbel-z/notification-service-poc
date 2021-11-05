// import { Parser } from '@slyp/alb-event-parser';
// import { validate } from '@slyp/json-schema-validator';

import requestBody from "../../validation/post/requestBody";
import { modelToView, viewToModel } from "../../adapter/post";
import { saveToKinesis } from "../../persistence/post";

export default async function post(eventParser: Parser) {
  const validation = validate(requestBody, eventParser.body());
  const body = eventParser.body() as PostRequestBody; // as we've validated above we can tell Typescript the object type
  // if validation failed, return an error
  const model = viewToModel(body);
  const persistence = saveToKinesis(model);
  // if saving to kinesis failed, return an error
  return modelToView(persistence);
}
