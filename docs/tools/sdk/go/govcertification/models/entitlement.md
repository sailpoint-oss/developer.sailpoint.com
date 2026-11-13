# Entitlement

# Entitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The id for the entitlement | [optional] 
**Name** | Pointer to **string** | The name of the entitlement | [optional] 
**Description** | Pointer to **string** | Information about the entitlement | [optional] 
**Privileged** | Pointer to **bool** | Deprecated. Replaced by effectivePrivilege (HIGH, MEDIUM, LOW, NONE). Indicates if the entitlement is a privileged entitlement. Retained for backward compatibility. | [optional] [default to false]
**Owner** | Pointer to [**IdentityReference**](identity-reference) |  | [optional] 
**AttributeName** | Pointer to **string** | The name of the attribute on the source | [optional] 
**AttributeValue** | Pointer to **string** | The value of the attribute on the source | [optional] 
**SourceSchemaObjectType** | Pointer to **string** | The schema object type on the source used to represent the entitlement and its attributes | [optional] 
**SourceName** | Pointer to **string** | The name of the source for which this entitlement belongs | [optional] 
**SourceType** | Pointer to **string** | The type of the source for which the entitlement belongs | [optional] 
**SourceId** | Pointer to **string** | The ID of the source for which the entitlement belongs | [optional] 
**HasPermissions** | Pointer to **bool** | Indicates if the entitlement has permissions | [optional] [default to false]
**IsPermission** | Pointer to **bool** | Indicates if the entitlement is a representation of an account permission | [optional] [default to false]
**Revocable** | Pointer to **bool** | Indicates whether the entitlement can be revoked | [optional] [default to true]
**CloudGoverned** | Pointer to **bool** | True if the entitlement is cloud governed | [optional] [default to false]
**Account** | Pointer to [**AccountReference**](account-reference) |  | [optional] 
**DataAccess** | Pointer to [**DataAccess**](data-access) |  | [optional] 
**ContainsDataAccess** | Pointer to **bool** | Will be true if the dataAccess property is populated. | [optional] [default to false]
**ActivityInsights** | Pointer to [**ActivityInsights**](activity-insights) |  | [optional] 
**ProvisioningType** | Pointer to **string** | Whether the entitlement assignment is just-in-time or standing | [optional] 

## Methods

### NewEntitlement

`func NewEntitlement() *Entitlement`

NewEntitlement instantiates a new Entitlement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementWithDefaults

`func NewEntitlementWithDefaults() *Entitlement`

NewEntitlementWithDefaults instantiates a new Entitlement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Entitlement) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Entitlement) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Entitlement) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Entitlement) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Entitlement) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Entitlement) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Entitlement) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Entitlement) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Entitlement) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Entitlement) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Entitlement) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Entitlement) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetPrivileged

`func (o *Entitlement) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *Entitlement) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *Entitlement) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.

### HasPrivileged

`func (o *Entitlement) HasPrivileged() bool`

HasPrivileged returns a boolean if a field has been set.

### GetOwner

`func (o *Entitlement) GetOwner() IdentityReference`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Entitlement) GetOwnerOk() (*IdentityReference, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Entitlement) SetOwner(v IdentityReference)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Entitlement) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetAttributeName

`func (o *Entitlement) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *Entitlement) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *Entitlement) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.

### HasAttributeName

`func (o *Entitlement) HasAttributeName() bool`

HasAttributeName returns a boolean if a field has been set.

### GetAttributeValue

`func (o *Entitlement) GetAttributeValue() string`

GetAttributeValue returns the AttributeValue field if non-nil, zero value otherwise.

### GetAttributeValueOk

`func (o *Entitlement) GetAttributeValueOk() (*string, bool)`

GetAttributeValueOk returns a tuple with the AttributeValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeValue

`func (o *Entitlement) SetAttributeValue(v string)`

SetAttributeValue sets AttributeValue field to given value.

### HasAttributeValue

`func (o *Entitlement) HasAttributeValue() bool`

HasAttributeValue returns a boolean if a field has been set.

### GetSourceSchemaObjectType

`func (o *Entitlement) GetSourceSchemaObjectType() string`

GetSourceSchemaObjectType returns the SourceSchemaObjectType field if non-nil, zero value otherwise.

### GetSourceSchemaObjectTypeOk

`func (o *Entitlement) GetSourceSchemaObjectTypeOk() (*string, bool)`

GetSourceSchemaObjectTypeOk returns a tuple with the SourceSchemaObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceSchemaObjectType

`func (o *Entitlement) SetSourceSchemaObjectType(v string)`

SetSourceSchemaObjectType sets SourceSchemaObjectType field to given value.

### HasSourceSchemaObjectType

`func (o *Entitlement) HasSourceSchemaObjectType() bool`

HasSourceSchemaObjectType returns a boolean if a field has been set.

### GetSourceName

`func (o *Entitlement) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *Entitlement) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *Entitlement) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *Entitlement) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetSourceType

`func (o *Entitlement) GetSourceType() string`

GetSourceType returns the SourceType field if non-nil, zero value otherwise.

### GetSourceTypeOk

`func (o *Entitlement) GetSourceTypeOk() (*string, bool)`

GetSourceTypeOk returns a tuple with the SourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceType

`func (o *Entitlement) SetSourceType(v string)`

SetSourceType sets SourceType field to given value.

### HasSourceType

`func (o *Entitlement) HasSourceType() bool`

HasSourceType returns a boolean if a field has been set.

### GetSourceId

`func (o *Entitlement) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Entitlement) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Entitlement) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Entitlement) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetHasPermissions

`func (o *Entitlement) GetHasPermissions() bool`

GetHasPermissions returns the HasPermissions field if non-nil, zero value otherwise.

### GetHasPermissionsOk

`func (o *Entitlement) GetHasPermissionsOk() (*bool, bool)`

GetHasPermissionsOk returns a tuple with the HasPermissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasPermissions

`func (o *Entitlement) SetHasPermissions(v bool)`

SetHasPermissions sets HasPermissions field to given value.

### HasHasPermissions

`func (o *Entitlement) HasHasPermissions() bool`

HasHasPermissions returns a boolean if a field has been set.

### GetIsPermission

`func (o *Entitlement) GetIsPermission() bool`

GetIsPermission returns the IsPermission field if non-nil, zero value otherwise.

### GetIsPermissionOk

`func (o *Entitlement) GetIsPermissionOk() (*bool, bool)`

GetIsPermissionOk returns a tuple with the IsPermission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPermission

`func (o *Entitlement) SetIsPermission(v bool)`

SetIsPermission sets IsPermission field to given value.

### HasIsPermission

`func (o *Entitlement) HasIsPermission() bool`

HasIsPermission returns a boolean if a field has been set.

### GetRevocable

`func (o *Entitlement) GetRevocable() bool`

GetRevocable returns the Revocable field if non-nil, zero value otherwise.

### GetRevocableOk

`func (o *Entitlement) GetRevocableOk() (*bool, bool)`

GetRevocableOk returns a tuple with the Revocable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocable

`func (o *Entitlement) SetRevocable(v bool)`

SetRevocable sets Revocable field to given value.

### HasRevocable

`func (o *Entitlement) HasRevocable() bool`

HasRevocable returns a boolean if a field has been set.

### GetCloudGoverned

`func (o *Entitlement) GetCloudGoverned() bool`

GetCloudGoverned returns the CloudGoverned field if non-nil, zero value otherwise.

### GetCloudGovernedOk

`func (o *Entitlement) GetCloudGovernedOk() (*bool, bool)`

GetCloudGovernedOk returns a tuple with the CloudGoverned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudGoverned

`func (o *Entitlement) SetCloudGoverned(v bool)`

SetCloudGoverned sets CloudGoverned field to given value.

### HasCloudGoverned

`func (o *Entitlement) HasCloudGoverned() bool`

HasCloudGoverned returns a boolean if a field has been set.

### GetAccount

`func (o *Entitlement) GetAccount() AccountReference`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *Entitlement) GetAccountOk() (*AccountReference, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *Entitlement) SetAccount(v AccountReference)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *Entitlement) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetDataAccess

`func (o *Entitlement) GetDataAccess() DataAccess`

GetDataAccess returns the DataAccess field if non-nil, zero value otherwise.

### GetDataAccessOk

`func (o *Entitlement) GetDataAccessOk() (*DataAccess, bool)`

GetDataAccessOk returns a tuple with the DataAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataAccess

`func (o *Entitlement) SetDataAccess(v DataAccess)`

SetDataAccess sets DataAccess field to given value.

### HasDataAccess

`func (o *Entitlement) HasDataAccess() bool`

HasDataAccess returns a boolean if a field has been set.

### GetContainsDataAccess

`func (o *Entitlement) GetContainsDataAccess() bool`

GetContainsDataAccess returns the ContainsDataAccess field if non-nil, zero value otherwise.

### GetContainsDataAccessOk

`func (o *Entitlement) GetContainsDataAccessOk() (*bool, bool)`

GetContainsDataAccessOk returns a tuple with the ContainsDataAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContainsDataAccess

`func (o *Entitlement) SetContainsDataAccess(v bool)`

SetContainsDataAccess sets ContainsDataAccess field to given value.

### HasContainsDataAccess

`func (o *Entitlement) HasContainsDataAccess() bool`

HasContainsDataAccess returns a boolean if a field has been set.

### GetActivityInsights

`func (o *Entitlement) GetActivityInsights() ActivityInsights`

GetActivityInsights returns the ActivityInsights field if non-nil, zero value otherwise.

### GetActivityInsightsOk

`func (o *Entitlement) GetActivityInsightsOk() (*ActivityInsights, bool)`

GetActivityInsightsOk returns a tuple with the ActivityInsights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityInsights

`func (o *Entitlement) SetActivityInsights(v ActivityInsights)`

SetActivityInsights sets ActivityInsights field to given value.

### HasActivityInsights

`func (o *Entitlement) HasActivityInsights() bool`

HasActivityInsights returns a boolean if a field has been set.

### GetProvisioningType

`func (o *Entitlement) GetProvisioningType() string`

GetProvisioningType returns the ProvisioningType field if non-nil, zero value otherwise.

### GetProvisioningTypeOk

`func (o *Entitlement) GetProvisioningTypeOk() (*string, bool)`

GetProvisioningTypeOk returns a tuple with the ProvisioningType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningType

`func (o *Entitlement) SetProvisioningType(v string)`

SetProvisioningType sets ProvisioningType field to given value.

### HasProvisioningType

`func (o *Entitlement) HasProvisioningType() bool`

HasProvisioningType returns a boolean if a field has been set.


