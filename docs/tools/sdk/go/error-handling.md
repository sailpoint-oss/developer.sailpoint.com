# Error handling with the Go SDK

The SDK returns the response object, request and error object for each method. The error object will be defined for any response status that falls out of the range of 2xx.

You can use an `if` statement to check whether there are any errors with the request and take actions on the results, such as logging the message or performing additional actions before exiting the program:

```go
resp, r, err := apiClient.TransformsAPI.ListTransformsV1(ctx).Filters("This is an incorrect string").Execute()
if err != nil {
 fmt.Fprintf(os.Stderr, "Error when calling `TransformsAPI.ListTransformsV1``: %v\n", err)
 fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
}
```

The program will continue running unless you specify to end it. Use `os.Exit(0)` within the error check to stop execution after an error is found.

```go
resp, r, err := apiClient.TransformsAPI.ListTransformsV1(ctx).Filters("This is an incorrect string").Execute()
if err != nil {
 fmt.Fprintf(os.Stderr, "Error when calling `TransformsAPI.ListTransformsV1``: %v\n", err)
 fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
 os.Exit(0)
}
```
