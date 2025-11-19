package com.sailpoint.handler;

import java.util.EnumSet;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayV2HTTPEvent;
import com.amazonaws.services.lambda.runtime.events.APIGatewayV2HTTPResponse;
import com.google.gson.Gson;
import com.jayway.jsonpath.Configuration;
import com.jayway.jsonpath.JsonPath;
import com.jayway.jsonpath.Option;
import com.jayway.jsonpath.spi.json.GsonJsonProvider;
import com.jayway.jsonpath.spi.mapper.GsonMappingProvider;

public class JSONPathHandler implements RequestHandler<APIGatewayV2HTTPEvent, APIGatewayV2HTTPResponse> {
    private static final Gson gson = new Gson();
    
    static {
        // Configure JsonPath to use Gson provider
        Configuration.setDefaults(new Configuration.Defaults() {
            private final GsonJsonProvider jsonProvider = new GsonJsonProvider();
            private final GsonMappingProvider mappingProvider = new GsonMappingProvider();

            @Override
            public com.jayway.jsonpath.spi.json.JsonProvider jsonProvider() {
                return jsonProvider;
            }

            @Override
            public com.jayway.jsonpath.spi.mapper.MappingProvider mappingProvider() {
                return mappingProvider;
            }

            @Override
            public Set<Option> options() {
                return EnumSet.noneOf(Option.class);
            }
        });
    }

    @Override
    public APIGatewayV2HTTPResponse handleRequest(APIGatewayV2HTTPEvent event, Context context) {
        LambdaLogger logger = context.getLogger();
        logger.log("EVENT TYPE: " + event.getClass().toString());
        
        APIGatewayV2HTTPResponse response = new APIGatewayV2HTTPResponse();
        response.setIsBase64Encoded(false);
        
        try {
            String rawInput = event.getBody();
            JsonRequest request = gson.fromJson(rawInput, JsonRequest.class);

            // Parse the JSON string directly with JsonPath (now using Gson provider)
            Object result = JsonPath.parse(request.getjson())
                                  .read(request.getpath());

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

        Map<String, String> headers = new HashMap<>();
        headers.put("Content-Type", "application/json");
        response.setHeaders(headers);

        return response;
    }

    public static class JsonRequest {
        private String json;
        private String path;

        public String getjson() { return json; }
        public void setjson(String json) { this.json = json; }
        public String getpath() { return path; }
        public void setpath(String path) { this.path = path; }
    }
}
