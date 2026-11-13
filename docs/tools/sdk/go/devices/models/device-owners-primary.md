# DeviceOwnersPrimary

# DeviceOwnersPrimary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **DtoType** |  | [optional] 
**Id** | Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the object to which this reference applies | [optional] 

## Methods

### NewDeviceOwnersPrimary

`func NewDeviceOwnersPrimary() *DeviceOwnersPrimary`

NewDeviceOwnersPrimary instantiates a new DeviceOwnersPrimary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeviceOwnersPrimaryWithDefaults

`func NewDeviceOwnersPrimaryWithDefaults() *DeviceOwnersPrimary`

NewDeviceOwnersPrimaryWithDefaults instantiates a new DeviceOwnersPrimary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *DeviceOwnersPrimary) GetType() DtoType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *DeviceOwnersPrimary) GetTypeOk() (*DtoType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *DeviceOwnersPrimary) SetType(v DtoType)`

SetType sets Type field to given value.

### HasType

`func (o *DeviceOwnersPrimary) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *DeviceOwnersPrimary) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DeviceOwnersPrimary) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DeviceOwnersPrimary) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *DeviceOwnersPrimary) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *DeviceOwnersPrimary) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DeviceOwnersPrimary) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DeviceOwnersPrimary) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *DeviceOwnersPrimary) HasName() bool`

HasName returns a boolean if a field has been set.


