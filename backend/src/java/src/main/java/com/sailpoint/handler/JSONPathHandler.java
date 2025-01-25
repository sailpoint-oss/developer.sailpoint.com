package com.sailpoint.handler;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayV2HTTPEvent;
import com.amazonaws.services.lambda.runtime.events.APIGatewayV2HTTPResponse;
import com.jayway.jsonpath.JsonPath;
import com.jayway.jsonpath.Configuration;
import com.google.gson.Gson;
import java.util.Map;
import java.util.HashMap;

public class JSONPathHandler implements RequestHandler<APIGatewayV2HTTPEvent, APIGatewayV2HTTPResponse> {
    private static final Gson gson = new Gson();

    @Override
    public APIGatewayV2HTTPResponse handleRequest(APIGatewayV2HTTPEvent event, Context context) {
        LambdaLogger logger = context.getLogger();
        logger.log("EVENT TYPE: " + event.getClass().toString());
        
        APIGatewayV2HTTPResponse response = new APIGatewayV2HTTPResponse();
        response.setIsBase64Encoded(false);
        
        try {
            String rawInput = event.getBody();
            JsonRequest request = gson.fromJson(rawInput, JsonRequest.class);
            logger.log("Request data: " + request.getJsonData());
            logger.log("Request query: " + request.getJsonPathQuery());

            // Parse the JSON string directly with JsonPath
            Object result = JsonPath.parse(request.getJsonData())
                                  .read(request.getJsonPathQuery());

            logger.log("Query result: " + result);

            // Create response body with result
            Map<String, Object> responseBody = new HashMap<>();
            responseBody.put("result", result);
            responseBody.put("error", null);

            response.setStatusCode(200);
            response.setBody(gson.toJson(responseBody));

        } catch (Exception e) {
            logger.log("Error: " + e.getMessage());
            
            // Create error response
            Map<String, Object> errorBody = new HashMap<>();
            errorBody.put("result", null);
            errorBody.put("error", e.getMessage());

            response.setStatusCode(400);
            response.setBody(gson.toJson(errorBody));
        }

        // Add CORS headers
        Map<String, String> headers = new HashMap<>();
        headers.put("Content-Type", "application/json");
        headers.put("Access-Control-Allow-Origin", "*");
        response.setHeaders(headers);

        return response;
    }

    public static class JsonRequest {
        private String jsonData;
        private String jsonPathQuery;

        public String getJsonData() { return jsonData; }
        public void setJsonData(String jsonData) { this.jsonData = jsonData; }
        public String getJsonPathQuery() { return jsonPathQuery; }
        public void setJsonPathQuery(String jsonPathQuery) { this.jsonPathQuery = jsonPathQuery; }
    }
}
