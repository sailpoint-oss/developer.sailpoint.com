# PutConnectorSourceTemplateV1Request

# PutConnectorSourceTemplateV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | ***os.File** | connector source template xml file | 

## Methods

### NewPutConnectorSourceTemplateV1Request

`func NewPutConnectorSourceTemplateV1Request(file *os.File, ) *PutConnectorSourceTemplateV1Request`

NewPutConnectorSourceTemplateV1Request instantiates a new PutConnectorSourceTemplateV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutConnectorSourceTemplateV1RequestWithDefaults

`func NewPutConnectorSourceTemplateV1RequestWithDefaults() *PutConnectorSourceTemplateV1Request`

NewPutConnectorSourceTemplateV1RequestWithDefaults instantiates a new PutConnectorSourceTemplateV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFile

`func (o *PutConnectorSourceTemplateV1Request) GetFile() *os.File`

GetFile returns the File field if non-nil, zero value otherwise.

### GetFileOk

`func (o *PutConnectorSourceTemplateV1Request) GetFileOk() (**os.File, bool)`

GetFileOk returns a tuple with the File field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFile

`func (o *PutConnectorSourceTemplateV1Request) SetFile(v *os.File)`

SetFile sets File field to given value.



