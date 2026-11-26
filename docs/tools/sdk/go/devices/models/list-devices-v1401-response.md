# ListDevicesV1401Response

# ListDevicesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface\{\}** | A message describing the error | [optional] 

## Methods

### NewListDevicesV1401Response

`func NewListDevicesV1401Response() *ListDevicesV1401Response`

NewListDevicesV1401Response instantiates a new ListDevicesV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListDevicesV1401ResponseWithDefaults

`func NewListDevicesV1401ResponseWithDefaults() *ListDevicesV1401Response`

NewListDevicesV1401ResponseWithDefaults instantiates a new ListDevicesV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *ListDevicesV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *ListDevicesV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *ListDevicesV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *ListDevicesV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *ListDevicesV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *ListDevicesV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

