package com.sailpoint.handler;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestStreamHandler;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.jayway.jsonpath.JsonPath;
import java.io.*;

public class JSONPathHandler implements RequestStreamHandler {
    private static final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public void handleRequest(InputStream input, OutputStream output,
                            Context context) throws IOException {
        // Read the input stream into a request object
        BufferedReader reader = new BufferedReader(new InputStreamReader(input));
        JsonRequest request = objectMapper.readValue(reader, JsonRequest.class);

        try {
            // Parse the JSON data and apply the JSONPath query
            Object result = JsonPath.parse(request.getJsonData())
                                  .read(request.getJsonPathQuery());

            // Create response object
            JsonResponse response = new JsonResponse(result);
            
            // Write the response
            objectMapper.writeValue(output, response);
            
        } catch (Exception e) {
            // Handle errors
            JsonResponse errorResponse = new JsonResponse(null, e.getMessage());
            objectMapper.writeValue(output, errorResponse);
        }
    }

    // Inner classes for request/response structure
    private static class JsonRequest {
        private String jsonData;
        private String jsonPathQuery;

        // Getters and setters
        public String getJsonData() { return jsonData; }
        public void setJsonData(String jsonData) { this.jsonData = jsonData; }
        public String getJsonPathQuery() { return jsonPathQuery; }
        public void setJsonPathQuery(String jsonPathQuery) { this.jsonPathQuery = jsonPathQuery; }
    }

    private static class JsonResponse {
        private Object result;
        private String error;

        public JsonResponse(Object result) {
            this.result = result;
        }

        public JsonResponse(Object result, String error) {
            this.result = result;
            this.error = error;
        }

        // Getters and setters
        public Object getResult() { return result; }
        public void setResult(Object result) { this.result = result; }
        public String getError() { return error; }
        public void setError(String error) { this.error = error; }
    }
}