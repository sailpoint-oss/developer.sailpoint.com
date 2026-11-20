# ListUiPluginsV1401Response

# ListUiPluginsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface\{\}** | A message describing the error | [optional] 

## Methods

### NewListUiPluginsV1401Response

`func NewListUiPluginsV1401Response() *ListUiPluginsV1401Response`

NewListUiPluginsV1401Response instantiates a new ListUiPluginsV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListUiPluginsV1401ResponseWithDefaults

`func NewListUiPluginsV1401ResponseWithDefaults() *ListUiPluginsV1401Response`

NewListUiPluginsV1401ResponseWithDefaults instantiates a new ListUiPluginsV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *ListUiPluginsV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *ListUiPluginsV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *ListUiPluginsV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *ListUiPluginsV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *ListUiPluginsV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *ListUiPluginsV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

