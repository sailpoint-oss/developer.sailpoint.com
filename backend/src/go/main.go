package main

import (
	"encoding/json"

	"github.com/sailpoint-oss/jsonslice"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

type Request struct {
	Path string `json:"path"`
	Json string `json:"json"`
}

type Response struct {
	Result string `json:"result"`
	Error  string `json:"error"`
}

//export evaluate
func evaluate(path string, jsonStr string) (string, error) {
	// Parse and evaluate the JsonPath
	result, err := jsonslice.Get([]byte(jsonStr), path)
	if err != nil {
		return "", err
	}

	return string(result), nil
}

func handler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	var body Request

	json.Unmarshal([]byte(request.Body), &body)

	result, err := evaluate(body.Path, body.Json)
	if err != nil {
		response := Response{
			Result: "",
			Error:  err.Error(),
		}
		jsonResponse, err := json.Marshal(response)
		if err != nil {
			return events.APIGatewayProxyResponse{
				Body:       err.Error(),
				StatusCode: 500,
			}, nil
		}
		return events.APIGatewayProxyResponse{
			Body:       string(jsonResponse),
			StatusCode: 500,
		}, nil
	}

	response := Response{
		Result: result,
		Error:  "",
	}

	jsonResponse, err := json.Marshal(response)
	if err != nil {
		return events.APIGatewayProxyResponse{
			Body:       err.Error(),
			StatusCode: 500,
		}, nil
	}

	return events.APIGatewayProxyResponse{
		Body:       string(jsonResponse),
		StatusCode: 200,
	}, nil
}

func main() {
	lambda.Start(handler)
}
