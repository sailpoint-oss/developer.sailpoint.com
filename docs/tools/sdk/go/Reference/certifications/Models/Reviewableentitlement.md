---
id: v1-reviewableentitlement
title: Reviewableentitlement
pagination_label: Reviewableentitlement
sidebar_label: Reviewableentitlement
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Reviewableentitlement', 'V1Reviewableentitlement'] 
slug: /tools/sdk/go/certifications/models/reviewableentitlement
tags: ['SDK', 'Software Development Kit', 'Reviewableentitlement', 'V1Reviewableentitlement']
---

# Reviewableentitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The id for the entitlement | [optional] 
**Name** | Pointer to **string** | The name of the entitlement | [optional] 
**Description** | Pointer to **NullableString** | Information about the entitlement | [optional] 
**Privileged** | Pointer to **bool** | Indicates if the entitlement is a privileged entitlement | [optional] [default to false]
**Owner** | Pointer to [**NullableIdentityreferencewithnameandemail**](identityreferencewithnameandemail) |  | [optional] 
**AttributeName** | Pointer to **string** | The name of the attribute on the source | [optional] 
**AttributeValue** | Pointer to **string** | The value of the attribute on the source | [optional] 
**SourceSchemaObjectType** | Pointer to **string** | The schema object type on the source used to represent the entitlement and its attributes | [optional] 
**SourceName** | Pointer to **string** | The name of the source for which this entitlement belongs | [optional] 
**SourceType** | Pointer to **string** | The type of the source for which the entitlement belongs | [optional] 
**SourceId** | Pointer to **string** | The ID of the source for which the entitlement belongs | [optional] 
**HasPermissions** | Pointer to **bool** | Indicates if the entitlement has permissions | [optional] [default to false]
**IsPermission** | Pointer to **bool** | Indicates if the entitlement is a representation of an account permission | [optional] [default to false]
**Revocable** | Pointer to **bool** | Indicates whether the entitlement can be revoked | [optional] [default to false]
**CloudGoverned** | Pointer to **bool** | True if the entitlement is cloud governed | [optional] [default to false]
**ContainsDataAccess** | Pointer to **bool** | True if the entitlement has DAS data | [optional] [default to false]
**DataAccess** | Pointer to [**NullableDataaccess**](dataaccess) |  | [optional] 
**Account** | Pointer to [**NullableReviewableentitlementAccount**](reviewableentitlement-account) |  | [optional] 

## Methods

### NewReviewableentitlement

`func NewReviewableentitlement() *Reviewableentitlement`

NewReviewableentitlement instantiates a new Reviewableentitlement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReviewableentitlementWithDefaults

`func NewReviewableentitlementWithDefaults() *Reviewableentitlement`

NewReviewableentitlementWithDefaults instantiates a new Reviewableentitlement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Reviewableentitlement) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Reviewableentitlement) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Reviewableentitlement) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Reviewableentitlement) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Reviewableentitlement) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Reviewableentitlement) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Reviewableentitlement) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Reviewableentitlement) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Reviewableentitlement) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Reviewableentitlement) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Reviewableentitlement) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Reviewableentitlement) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Reviewableentitlement) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Reviewableentitlement) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetPrivileged

`func (o *Reviewableentitlement) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *Reviewableentitlement) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *Reviewableentitlement) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.

### HasPrivileged

`func (o *Reviewableentitlement) HasPrivileged() bool`

HasPrivileged returns a boolean if a field has been set.

### GetOwner

`func (o *Reviewableentitlement) GetOwner() Identityreferencewithnameandemail`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Reviewableentitlement) GetOwnerOk() (*Identityreferencewithnameandemail, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Reviewableentitlement) SetOwner(v Identityreferencewithnameandemail)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Reviewableentitlement) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### SetOwnerNil

`func (o *Reviewableentitlement) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *Reviewableentitlement) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil
### GetAttributeName

`func (o *Reviewableentitlement) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *Reviewableentitlement) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *Reviewableentitlement) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.

### HasAttributeName

`func (o *Reviewableentitlement) HasAttributeName() bool`

HasAttributeName returns a boolean if a field has been set.

### GetAttributeValue

`func (o *Reviewableentitlement) GetAttributeValue() string`

GetAttributeValue returns the AttributeValue field if non-nil, zero value otherwise.

### GetAttributeValueOk

`func (o *Reviewableentitlement) GetAttributeValueOk() (*string, bool)`

GetAttributeValueOk returns a tuple with the AttributeValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeValue

`func (o *Reviewableentitlement) SetAttributeValue(v string)`

SetAttributeValue sets AttributeValue field to given value.

### HasAttributeValue

`func (o *Reviewableentitlement) HasAttributeValue() bool`

HasAttributeValue returns a boolean if a field has been set.

### GetSourceSchemaObjectType

`func (o *Reviewableentitlement) GetSourceSchemaObjectType() string`

GetSourceSchemaObjectType returns the SourceSchemaObjectType field if non-nil, zero value otherwise.

### GetSourceSchemaObjectTypeOk

`func (o *Reviewableentitlement) GetSourceSchemaObjectTypeOk() (*string, bool)`

GetSourceSchemaObjectTypeOk returns a tuple with the SourceSchemaObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceSchemaObjectType

`func (o *Reviewableentitlement) SetSourceSchemaObjectType(v string)`

SetSourceSchemaObjectType sets SourceSchemaObjectType field to given value.

### HasSourceSchemaObjectType

`func (o *Reviewableentitlement) HasSourceSchemaObjectType() bool`

HasSourceSchemaObjectType returns a boolean if a field has been set.

### GetSourceName

`func (o *Reviewableentitlement) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *Reviewableentitlement) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *Reviewableentitlement) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *Reviewableentitlement) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetSourceType

`func (o *Reviewableentitlement) GetSourceType() string`

GetSourceType returns the SourceType field if non-nil, zero value otherwise.

### GetSourceTypeOk

`func (o *Reviewableentitlement) GetSourceTypeOk() (*string, bool)`

GetSourceTypeOk returns a tuple with the SourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceType

`func (o *Reviewableentitlement) SetSourceType(v string)`

SetSourceType sets SourceType field to given value.

### HasSourceType

`func (o *Reviewableentitlement) HasSourceType() bool`

HasSourceType returns a boolean if a field has been set.

### GetSourceId

`func (o *Reviewableentitlement) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Reviewableentitlement) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Reviewableentitlement) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Reviewableentitlement) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetHasPermissions

`func (o *Reviewableentitlement) GetHasPermissions() bool`

GetHasPermissions returns the HasPermissions field if non-nil, zero value otherwise.

### GetHasPermissionsOk

`func (o *Reviewableentitlement) GetHasPermissionsOk() (*bool, bool)`

GetHasPermissionsOk returns a tuple with the HasPermissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasPermissions

`func (o *Reviewableentitlement) SetHasPermissions(v bool)`

SetHasPermissions sets HasPermissions field to given value.

### HasHasPermissions

`func (o *Reviewableentitlement) HasHasPermissions() bool`

HasHasPermissions returns a boolean if a field has been set.

### GetIsPermission

`func (o *Reviewableentitlement) GetIsPermission() bool`

GetIsPermission returns the IsPermission field if non-nil, zero value otherwise.

### GetIsPermissionOk

`func (o *Reviewableentitlement) GetIsPermissionOk() (*bool, bool)`

GetIsPermissionOk returns a tuple with the IsPermission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPermission

`func (o *Reviewableentitlement) SetIsPermission(v bool)`

SetIsPermission sets IsPermission field to given value.

### HasIsPermission

`func (o *Reviewableentitlement) HasIsPermission() bool`

HasIsPermission returns a boolean if a field has been set.

### GetRevocable

`func (o *Reviewableentitlement) GetRevocable() bool`

GetRevocable returns the Revocable field if non-nil, zero value otherwise.

### GetRevocableOk

`func (o *Reviewableentitlement) GetRevocableOk() (*bool, bool)`

GetRevocableOk returns a tuple with the Revocable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocable

`func (o *Reviewableentitlement) SetRevocable(v bool)`

SetRevocable sets Revocable field to given value.

### HasRevocable

`func (o *Reviewableentitlement) HasRevocable() bool`

HasRevocable returns a boolean if a field has been set.

### GetCloudGoverned

`func (o *Reviewableentitlement) GetCloudGoverned() bool`

GetCloudGoverned returns the CloudGoverned field if non-nil, zero value otherwise.

### GetCloudGovernedOk

`func (o *Reviewableentitlement) GetCloudGovernedOk() (*bool, bool)`

GetCloudGovernedOk returns a tuple with the CloudGoverned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudGoverned

`func (o *Reviewableentitlement) SetCloudGoverned(v bool)`

SetCloudGoverned sets CloudGoverned field to given value.

### HasCloudGoverned

`func (o *Reviewableentitlement) HasCloudGoverned() bool`

HasCloudGoverned returns a boolean if a field has been set.

### GetContainsDataAccess

`func (o *Reviewableentitlement) GetContainsDataAccess() bool`

GetContainsDataAccess returns the ContainsDataAccess field if non-nil, zero value otherwise.

### GetContainsDataAccessOk

`func (o *Reviewableentitlement) GetContainsDataAccessOk() (*bool, bool)`

GetContainsDataAccessOk returns a tuple with the ContainsDataAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContainsDataAccess

`func (o *Reviewableentitlement) SetContainsDataAccess(v bool)`

SetContainsDataAccess sets ContainsDataAccess field to given value.

### HasContainsDataAccess

`func (o *Reviewableentitlement) HasContainsDataAccess() bool`

HasContainsDataAccess returns a boolean if a field has been set.

### GetDataAccess

`func (o *Reviewableentitlement) GetDataAccess() Dataaccess`

GetDataAccess returns the DataAccess field if non-nil, zero value otherwise.

### GetDataAccessOk

`func (o *Reviewableentitlement) GetDataAccessOk() (*Dataaccess, bool)`

GetDataAccessOk returns a tuple with the DataAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataAccess

`func (o *Reviewableentitlement) SetDataAccess(v Dataaccess)`

SetDataAccess sets DataAccess field to given value.

### HasDataAccess

`func (o *Reviewableentitlement) HasDataAccess() bool`

HasDataAccess returns a boolean if a field has been set.

### SetDataAccessNil

`func (o *Reviewableentitlement) SetDataAccessNil(b bool)`

 SetDataAccessNil sets the value for DataAccess to be an explicit nil

### UnsetDataAccess
`func (o *Reviewableentitlement) UnsetDataAccess()`

UnsetDataAccess ensures that no value is present for DataAccess, not even an explicit nil
### GetAccount

`func (o *Reviewableentitlement) GetAccount() ReviewableentitlementAccount`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *Reviewableentitlement) GetAccountOk() (*ReviewableentitlementAccount, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *Reviewableentitlement) SetAccount(v ReviewableentitlementAccount)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *Reviewableentitlement) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### SetAccountNil

`func (o *Reviewableentitlement) SetAccountNil(b bool)`

 SetAccountNil sets the value for Account to be an explicit nil

### UnsetAccount
`func (o *Reviewableentitlement) UnsetAccount()`

UnsetAccount ensures that no value is present for Account, not even an explicit nil

