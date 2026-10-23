# ListWorkflowsV1429Response

# ListWorkflowsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface\{\}** | A message describing the error | [optional] 

## Methods

### NewListWorkflowsV1429Response

`func NewListWorkflowsV1429Response() *ListWorkflowsV1429Response`

NewListWorkflowsV1429Response instantiates a new ListWorkflowsV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListWorkflowsV1429ResponseWithDefaults

`func NewListWorkflowsV1429ResponseWithDefaults() *ListWorkflowsV1429Response`

NewListWorkflowsV1429ResponseWithDefaults instantiates a new ListWorkflowsV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListWorkflowsV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListWorkflowsV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListWorkflowsV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListWorkflowsV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListWorkflowsV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListWorkflowsV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

