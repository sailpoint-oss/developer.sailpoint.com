# ListControlsV1429Response

# ListControlsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface\{\}** | A message describing the error | [optional] 

## Methods

### NewListControlsV1429Response

`func NewListControlsV1429Response() *ListControlsV1429Response`

NewListControlsV1429Response instantiates a new ListControlsV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListControlsV1429ResponseWithDefaults

`func NewListControlsV1429ResponseWithDefaults() *ListControlsV1429Response`

NewListControlsV1429ResponseWithDefaults instantiates a new ListControlsV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListControlsV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListControlsV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListControlsV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListControlsV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListControlsV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListControlsV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

