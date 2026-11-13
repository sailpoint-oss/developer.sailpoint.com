# Reminderescalationtenantconfig

# Reminderescalationtenantconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TenantId** | **string** | Tenant id taken from the authenticated request. | [readonly] 
**DomainObjectType** | **string** | Domain object type this default applies to. | 
**Rules** | [**Reminderescalationruleset**](reminderescalationruleset) |  | 
**SchemaVersion** | **int32** | Schema version assigned by the service. Clients do not set this field. | [readonly] 
**Revision** | **int32** | Optimistic-lock counter. Echo this value on update. | 
**CreatedAt** | **SailPointTime** | When this tenant default was created. | [readonly] 
**UpdatedAt** | **SailPointTime** | When this tenant default was last updated. | [readonly] 

## Methods

### NewReminderescalationtenantconfig

`func NewReminderescalationtenantconfig(tenantId string, domainObjectType string, rules Reminderescalationruleset, schemaVersion int32, revision int32, createdAt SailPointTime, updatedAt SailPointTime, ) *Reminderescalationtenantconfig`

NewReminderescalationtenantconfig instantiates a new Reminderescalationtenantconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReminderescalationtenantconfigWithDefaults

`func NewReminderescalationtenantconfigWithDefaults() *Reminderescalationtenantconfig`

NewReminderescalationtenantconfigWithDefaults instantiates a new Reminderescalationtenantconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTenantId

`func (o *Reminderescalationtenantconfig) GetTenantId() string`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *Reminderescalationtenantconfig) GetTenantIdOk() (*string, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *Reminderescalationtenantconfig) SetTenantId(v string)`

SetTenantId sets TenantId field to given value.


### GetDomainObjectType

`func (o *Reminderescalationtenantconfig) GetDomainObjectType() string`

GetDomainObjectType returns the DomainObjectType field if non-nil, zero value otherwise.

### GetDomainObjectTypeOk

`func (o *Reminderescalationtenantconfig) GetDomainObjectTypeOk() (*string, bool)`

GetDomainObjectTypeOk returns a tuple with the DomainObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomainObjectType

`func (o *Reminderescalationtenantconfig) SetDomainObjectType(v string)`

SetDomainObjectType sets DomainObjectType field to given value.


### GetRules

`func (o *Reminderescalationtenantconfig) GetRules() Reminderescalationruleset`

GetRules returns the Rules field if non-nil, zero value otherwise.

### GetRulesOk

`func (o *Reminderescalationtenantconfig) GetRulesOk() (*Reminderescalationruleset, bool)`

GetRulesOk returns a tuple with the Rules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRules

`func (o *Reminderescalationtenantconfig) SetRules(v Reminderescalationruleset)`

SetRules sets Rules field to given value.


### GetSchemaVersion

`func (o *Reminderescalationtenantconfig) GetSchemaVersion() int32`

GetSchemaVersion returns the SchemaVersion field if non-nil, zero value otherwise.

### GetSchemaVersionOk

`func (o *Reminderescalationtenantconfig) GetSchemaVersionOk() (*int32, bool)`

GetSchemaVersionOk returns a tuple with the SchemaVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchemaVersion

`func (o *Reminderescalationtenantconfig) SetSchemaVersion(v int32)`

SetSchemaVersion sets SchemaVersion field to given value.


### GetRevision

`func (o *Reminderescalationtenantconfig) GetRevision() int32`

GetRevision returns the Revision field if non-nil, zero value otherwise.

### GetRevisionOk

`func (o *Reminderescalationtenantconfig) GetRevisionOk() (*int32, bool)`

GetRevisionOk returns a tuple with the Revision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevision

`func (o *Reminderescalationtenantconfig) SetRevision(v int32)`

SetRevision sets Revision field to given value.


### GetCreatedAt

`func (o *Reminderescalationtenantconfig) GetCreatedAt() SailPointTime`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Reminderescalationtenantconfig) GetCreatedAtOk() (*SailPointTime, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Reminderescalationtenantconfig) SetCreatedAt(v SailPointTime)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *Reminderescalationtenantconfig) GetUpdatedAt() SailPointTime`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Reminderescalationtenantconfig) GetUpdatedAtOk() (*SailPointTime, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Reminderescalationtenantconfig) SetUpdatedAt(v SailPointTime)`

SetUpdatedAt sets UpdatedAt field to given value.



