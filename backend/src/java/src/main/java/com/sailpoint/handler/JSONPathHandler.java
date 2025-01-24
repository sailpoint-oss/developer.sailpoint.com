package com.sailpoint.handler;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestStreamHandler;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.jayway.jsonpath.JsonPath;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.jayway.jsonpath.Configuration;
import com.jayway.jsonpath.spi.json.JacksonJsonProvider;
import java.io.*;

public class JSONPathHandler implements RequestStreamHandler {
    private static final ObjectMapper objectMapper = new ObjectMapper();
    private static final Configuration jsonPathConfig = Configuration.builder()
            .jsonProvider(new JacksonJsonProvider(objectMapper))
            .build();

    @Override
    public void handleRequest(InputStream input, OutputStream output,
                            Context context) throws IOException {
        try {
            // Read and log raw input
            String rawInput = new BufferedReader(new InputStreamReader(input))
                .lines()
                .reduce("", String::concat);
            context.getLogger().log("Raw input: " + rawInput);

            // Parse request
            JsonRequest request = objectMapper.readValue(rawInput, JsonRequest.class);
            context.getLogger().log("Parsed request - jsonData: " + request.getJsonData());
            context.getLogger().log("Parsed request - jsonPathQuery: " + request.getJsonPathQuery());

            // First parse the JSON string into a Jackson object
            Object document = objectMapper.readTree(request.getJsonData());
            context.getLogger().log("Parsed JSON document: " + document);

            // Use JsonPath with the parsed document
            Object result = JsonPath.using(jsonPathConfig)
                                  .parse(document)
                                  .read(request.getJsonPathQuery());
            context.getLogger().log("Query result: " + result);

            // Write response
            JsonResponse response = new JsonResponse(result);
            objectMapper.writeValue(output, response);
            
        } catch (Exception e) {
            context.getLogger().log("Error: " + e.getClass().getName() + " - " + e.getMessage());
            JsonResponse errorResponse = new JsonResponse(null, e.getMessage());
            objectMapper.writeValue(output, errorResponse);
        }
    }

    // Inner classes for request/response structure
    @JsonIgnoreProperties(ignoreUnknown = true)
    private static class JsonRequest {
        private String jsonData;
        private String jsonPathQuery;

        // Default constructor required by Jackson
        public JsonRequest() {}

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
            this.error = null;
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