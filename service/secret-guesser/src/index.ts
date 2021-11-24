// /**
//  * The entrypoint for the lambda. Routes requests to the relevant handler function
//  */
// import { ALBEvent, ALBResult } from "aws-lambda";
//
// import postHandler from "./handler/post";
//
// export async function handler(event: ALBEvent): Promise<unknown> {
//   console.log("hello world");
//   // Returns Promise<ALBResult>
//   switch (event.httpMethod) {
//     case "POST":
//       return postHandler();
//     default:
//       return {
//         statusCode: 400,
//         body: JSON.stringify({ message: "Unsupported HTTP Method" }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//   }
// }

import { IDENTIFIERS } from "./inversify.identifiers";
import { INVERSIFY_CONTAINER } from "./inversify.config";
import { InversifyApplication } from "./InversifyApplication";

function main(): void {
  const application: InversifyApplication =
    INVERSIFY_CONTAINER.get<InversifyApplication>(IDENTIFIERS.INVERSIFY_APP_ID);

  application.start(400);
}

main();
