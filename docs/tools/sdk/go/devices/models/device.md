# Device

# Device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **NullableString** | Name of the Object | 
**Created** | Pointer to **SailPointTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Last modification date of the Object | [optional] [readonly] 
**NativeIdentity** | Pointer to **string** | The device's unique identifier on the source. | [optional] 
**Description** | Pointer to **string** | Description of the device. | [optional] 
**Environment** | Pointer to **string** | The environment the device belongs to. | [optional] 
**Hostname** | Pointer to **string** | The device hostname reported by the source. | [optional] 
**Os** | Pointer to [**DeviceOS**](device-os) |  | [optional] 
**Email** | Pointer to **string** | The email address the source reports for the device. | [optional] 
**SentinelVersion** | Pointer to **string** | The version of the endpoint agent the source reports for the device. | [optional] 
**DetectionModuleVersion** | Pointer to **string** | The version of the detection module the source reports for the device. | [optional] 
**Source** | Pointer to [**DeviceAllOfSource**](device-all-of-source) |  | [optional] 
**Resource** | Pointer to [**DeviceResource**](device-resource) |  | [optional] 
**DatasetId** | Pointer to **string** | The ID of the source dataset the device was retrieved from. | [optional] 
**Owners** | Pointer to [**DeviceOwners**](device-owners) |  | [optional] 
**ConnectorAttributes** | Pointer to **map[string]interface\{\}** | A map of attributes sourced from the connector during aggregation. | [optional] 
**Attributes** | Pointer to **map[string]interface\{\}** | A map of curated device attributes. | [optional] 

## Methods

### NewDevice

`func NewDevice(name NullableString, ) *Device`

NewDevice instantiates a new Device object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeviceWithDefaults

`func NewDeviceWithDefaults() *Device`

NewDeviceWithDefaults instantiates a new Device object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Device) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Device) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Device) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Device) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Device) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Device) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Device) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *Device) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Device) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *Device) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Device) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Device) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Device) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Device) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Device) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Device) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Device) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *Device) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *Device) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *Device) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *Device) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetDescription

`func (o *Device) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Device) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Device) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Device) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetEnvironment

`func (o *Device) GetEnvironment() string`

GetEnvironment returns the Environment field if non-nil, zero value otherwise.

### GetEnvironmentOk

`func (o *Device) GetEnvironmentOk() (*string, bool)`

GetEnvironmentOk returns a tuple with the Environment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironment

`func (o *Device) SetEnvironment(v string)`

SetEnvironment sets Environment field to given value.

### HasEnvironment

`func (o *Device) HasEnvironment() bool`

HasEnvironment returns a boolean if a field has been set.

### GetHostname

`func (o *Device) GetHostname() string`

GetHostname returns the Hostname field if non-nil, zero value otherwise.

### GetHostnameOk

`func (o *Device) GetHostnameOk() (*string, bool)`

GetHostnameOk returns a tuple with the Hostname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHostname

`func (o *Device) SetHostname(v string)`

SetHostname sets Hostname field to given value.

### HasHostname

`func (o *Device) HasHostname() bool`

HasHostname returns a boolean if a field has been set.

### GetOs

`func (o *Device) GetOs() DeviceOS`

GetOs returns the Os field if non-nil, zero value otherwise.

### GetOsOk

`func (o *Device) GetOsOk() (*DeviceOS, bool)`

GetOsOk returns a tuple with the Os field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOs

`func (o *Device) SetOs(v DeviceOS)`

SetOs sets Os field to given value.

### HasOs

`func (o *Device) HasOs() bool`

HasOs returns a boolean if a field has been set.

### GetEmail

`func (o *Device) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *Device) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *Device) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *Device) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetSentinelVersion

`func (o *Device) GetSentinelVersion() string`

GetSentinelVersion returns the SentinelVersion field if non-nil, zero value otherwise.

### GetSentinelVersionOk

`func (o *Device) GetSentinelVersionOk() (*string, bool)`

GetSentinelVersionOk returns a tuple with the SentinelVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSentinelVersion

`func (o *Device) SetSentinelVersion(v string)`

SetSentinelVersion sets SentinelVersion field to given value.

### HasSentinelVersion

`func (o *Device) HasSentinelVersion() bool`

HasSentinelVersion returns a boolean if a field has been set.

### GetDetectionModuleVersion

`func (o *Device) GetDetectionModuleVersion() string`

GetDetectionModuleVersion returns the DetectionModuleVersion field if non-nil, zero value otherwise.

### GetDetectionModuleVersionOk

`func (o *Device) GetDetectionModuleVersionOk() (*string, bool)`

GetDetectionModuleVersionOk returns a tuple with the DetectionModuleVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetectionModuleVersion

`func (o *Device) SetDetectionModuleVersion(v string)`

SetDetectionModuleVersion sets DetectionModuleVersion field to given value.

### HasDetectionModuleVersion

`func (o *Device) HasDetectionModuleVersion() bool`

HasDetectionModuleVersion returns a boolean if a field has been set.

### GetSource

`func (o *Device) GetSource() DeviceAllOfSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Device) GetSourceOk() (*DeviceAllOfSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Device) SetSource(v DeviceAllOfSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *Device) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetResource

`func (o *Device) GetResource() DeviceResource`

GetResource returns the Resource field if non-nil, zero value otherwise.

### GetResourceOk

`func (o *Device) GetResourceOk() (*DeviceResource, bool)`

GetResourceOk returns a tuple with the Resource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResource

`func (o *Device) SetResource(v DeviceResource)`

SetResource sets Resource field to given value.

### HasResource

`func (o *Device) HasResource() bool`

HasResource returns a boolean if a field has been set.

### GetDatasetId

`func (o *Device) GetDatasetId() string`

GetDatasetId returns the DatasetId field if non-nil, zero value otherwise.

### GetDatasetIdOk

`func (o *Device) GetDatasetIdOk() (*string, bool)`

GetDatasetIdOk returns a tuple with the DatasetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasetId

`func (o *Device) SetDatasetId(v string)`

SetDatasetId sets DatasetId field to given value.

### HasDatasetId

`func (o *Device) HasDatasetId() bool`

HasDatasetId returns a boolean if a field has been set.

### GetOwners

`func (o *Device) GetOwners() DeviceOwners`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *Device) GetOwnersOk() (*DeviceOwners, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *Device) SetOwners(v DeviceOwners)`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *Device) HasOwners() bool`

HasOwners returns a boolean if a field has been set.

### GetConnectorAttributes

`func (o *Device) GetConnectorAttributes() map[string]interface{}`

GetConnectorAttributes returns the ConnectorAttributes field if non-nil, zero value otherwise.

### GetConnectorAttributesOk

`func (o *Device) GetConnectorAttributesOk() (*map[string]interface{}, bool)`

GetConnectorAttributesOk returns a tuple with the ConnectorAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorAttributes

`func (o *Device) SetConnectorAttributes(v map[string]interface{})`

SetConnectorAttributes sets ConnectorAttributes field to given value.

### HasConnectorAttributes

`func (o *Device) HasConnectorAttributes() bool`

HasConnectorAttributes returns a boolean if a field has been set.

### GetAttributes

`func (o *Device) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Device) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Device) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Device) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.


