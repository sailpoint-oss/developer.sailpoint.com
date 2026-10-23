# ImportAccountsSchemaV1Request

# ImportAccountsSchemaV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | Pointer to ***os.File** |  | [optional] 

## Methods

### NewImportAccountsSchemaV1Request

`func NewImportAccountsSchemaV1Request() *ImportAccountsSchemaV1Request`

NewImportAccountsSchemaV1Request instantiates a new ImportAccountsSchemaV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImportAccountsSchemaV1RequestWithDefaults

`func NewImportAccountsSchemaV1RequestWithDefaults() *ImportAccountsSchemaV1Request`

NewImportAccountsSchemaV1RequestWithDefaults instantiates a new ImportAccountsSchemaV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFile

`func (o *ImportAccountsSchemaV1Request) GetFile() *os.File`

GetFile returns the File field if non-nil, zero value otherwise.

### GetFileOk

`func (o *ImportAccountsSchemaV1Request) GetFileOk() (**os.File, bool)`

GetFileOk returns a tuple with the File field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFile

`func (o *ImportAccountsSchemaV1Request) SetFile(v *os.File)`

SetFile sets File field to given value.

### HasFile

`func (o *ImportAccountsSchemaV1Request) HasFile() bool`

HasFile returns a boolean if a field has been set.


