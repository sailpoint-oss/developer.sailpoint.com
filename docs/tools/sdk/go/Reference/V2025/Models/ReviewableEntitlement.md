---
id: reviewable-entitlement
title: ReviewableEntitlement
pagination_label: ReviewableEntitlement
sidebar_label: ReviewableEntitlement
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ReviewableEntitlement', 'ReviewableEntitlement'] 
slug: /tools/sdk/go//models/reviewable-entitlement
tags: ['SDK', 'Software Development Kit', 'ReviewableEntitlement', 'ReviewableEntitlement']
---

# ReviewableEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The id for the entitlement | [optional] 
**Name** | Pointer to **string** | The name of the entitlement | [optional] 
**Description** | Pointer to **NullableString** | Information about the entitlement | [optional] 
**Privileged** | Pointer to **bool** | Indicates if the entitlement is a privileged entitlement | [optional] [default to false]
**Owner** | Pointer to [**NullableIdentityReferenceWithNameAndEmail**](identity-reference-with-name-and-email) |  | [optional] 
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
**DataAccess** | Pointer to [**NullableDataAccess**](data-access) |  | [optional] 
**Account** | Pointer to [**NullableReviewableEntitlementAccount**](reviewable-entitlement-account) |  | [optional] 

## Methods

### NewReviewableEntitlement

`func NewReviewableEntitlement() *ReviewableEntitlement`

NewReviewableEntitlement instantiates a new ReviewableEntitlement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReviewableEntitlementWithDefaults

`func NewReviewableEntitlementWithDefaults() *ReviewableEntitlement`

NewReviewableEntitlementWithDefaults instantiates a new ReviewableEntitlement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ReviewableEntitlement) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ReviewableEntitlement) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ReviewableEntitlement) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ReviewableEntitlement) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ReviewableEntitlement) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ReviewableEntitlement) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ReviewableEntitlement) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ReviewableEntitlement) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *ReviewableEntitlement) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ReviewableEntitlement) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ReviewableEntitlement) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ReviewableEntitlement) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *ReviewableEntitlement) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *ReviewableEntitlement) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetPrivileged

`func (o *ReviewableEntitlement) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *ReviewableEntitlement) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *ReviewableEntitlement) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.

### HasPrivileged

`func (o *ReviewableEntitlement) HasPrivileged() bool`

HasPrivileged returns a boolean if a field has been set.

### GetOwner

`func (o *ReviewableEntitlement) GetOwner() IdentityReferenceWithNameAndEmail`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *ReviewableEntitlement) GetOwnerOk() (*IdentityReferenceWithNameAndEmail, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *ReviewableEntitlement) SetOwner(v IdentityReferenceWithNameAndEmail)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *ReviewableEntitlement) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### SetOwnerNil

`func (o *ReviewableEntitlement) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *ReviewableEntitlement) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil
### GetAttributeName

`func (o *ReviewableEntitlement) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *ReviewableEntitlement) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *ReviewableEntitlement) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.

### HasAttributeName

`func (o *ReviewableEntitlement) HasAttributeName() bool`

HasAttributeName returns a boolean if a field has been set.

### GetAttributeValue

`func (o *ReviewableEntitlement) GetAttributeValue() string`

GetAttributeValue returns the AttributeValue field if non-nil, zero value otherwise.

### GetAttributeValueOk

`func (o *ReviewableEntitlement) GetAttributeValueOk() (*string, bool)`

GetAttributeValueOk returns a tuple with the AttributeValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeValue

`func (o *ReviewableEntitlement) SetAttributeValue(v string)`

SetAttributeValue sets AttributeValue field to given value.

### HasAttributeValue

`func (o *ReviewableEntitlement) HasAttributeValue() bool`

HasAttributeValue returns a boolean if a field has been set.

### GetSourceSchemaObjectType

`func (o *ReviewableEntitlement) GetSourceSchemaObjectType() string`

GetSourceSchemaObjectType returns the SourceSchemaObjectType field if non-nil, zero value otherwise.

### GetSourceSchemaObjectTypeOk

`func (o *ReviewableEntitlement) GetSourceSchemaObjectTypeOk() (*string, bool)`

GetSourceSchemaObjectTypeOk returns a tuple with the SourceSchemaObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceSchemaObjectType

`func (o *ReviewableEntitlement) SetSourceSchemaObjectType(v string)`

SetSourceSchemaObjectType sets SourceSchemaObjectType field to given value.

### HasSourceSchemaObjectType

`func (o *ReviewableEntitlement) HasSourceSchemaObjectType() bool`

HasSourceSchemaObjectType returns a boolean if a field has been set.

### GetSourceName

`func (o *ReviewableEntitlement) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *ReviewableEntitlement) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *ReviewableEntitlement) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *ReviewableEntitlement) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetSourceType

`func (o *ReviewableEntitlement) GetSourceType() string`

GetSourceType returns the SourceType field if non-nil, zero value otherwise.

### GetSourceTypeOk

`func (o *ReviewableEntitlement) GetSourceTypeOk() (*string, bool)`

GetSourceTypeOk returns a tuple with the SourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceType

`func (o *ReviewableEntitlement) SetSourceType(v string)`

SetSourceType sets SourceType field to given value.

### HasSourceType

`func (o *ReviewableEntitlement) HasSourceType() bool`

HasSourceType returns a boolean if a field has been set.

### GetSourceId

`func (o *ReviewableEntitlement) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *ReviewableEntitlement) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *ReviewableEntitlement) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *ReviewableEntitlement) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetHasPermissions

`func (o *ReviewableEntitlement) GetHasPermissions() bool`

GetHasPermissions returns the HasPermissions field if non-nil, zero value otherwise.

### GetHasPermissionsOk

`func (o *ReviewableEntitlement) GetHasPermissionsOk() (*bool, bool)`

GetHasPermissionsOk returns a tuple with the HasPermissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasPermissions

`func (o *ReviewableEntitlement) SetHasPermissions(v bool)`

SetHasPermissions sets HasPermissions field to given value.

### HasHasPermissions

`func (o *ReviewableEntitlement) HasHasPermissions() bool`

HasHasPermissions returns a boolean if a field has been set.

### GetIsPermission

`func (o *ReviewableEntitlement) GetIsPermission() bool`

GetIsPermission returns the IsPermission field if non-nil, zero value otherwise.

### GetIsPermissionOk

`func (o *ReviewableEntitlement) GetIsPermissionOk() (*bool, bool)`

GetIsPermissionOk returns a tuple with the IsPermission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPermission

`func (o *ReviewableEntitlement) SetIsPermission(v bool)`

SetIsPermission sets IsPermission field to given value.

### HasIsPermission

`func (o *ReviewableEntitlement) HasIsPermission() bool`

HasIsPermission returns a boolean if a field has been set.

### GetRevocable

`func (o *ReviewableEntitlement) GetRevocable() bool`

GetRevocable returns the Revocable field if non-nil, zero value otherwise.

### GetRevocableOk

`func (o *ReviewableEntitlement) GetRevocableOk() (*bool, bool)`

GetRevocableOk returns a tuple with the Revocable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocable

`func (o *ReviewableEntitlement) SetRevocable(v bool)`

SetRevocable sets Revocable field to given value.

### HasRevocable

`func (o *ReviewableEntitlement) HasRevocable() bool`

HasRevocable returns a boolean if a field has been set.

### GetCloudGoverned

`func (o *ReviewableEntitlement) GetCloudGoverned() bool`

GetCloudGoverned returns the CloudGoverned field if non-nil, zero value otherwise.

### GetCloudGovernedOk

`func (o *ReviewableEntitlement) GetCloudGovernedOk() (*bool, bool)`

GetCloudGovernedOk returns a tuple with the CloudGoverned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudGoverned

`func (o *ReviewableEntitlement) SetCloudGoverned(v bool)`

SetCloudGoverned sets CloudGoverned field to given value.

### HasCloudGoverned

`func (o *ReviewableEntitlement) HasCloudGoverned() bool`

HasCloudGoverned returns a boolean if a field has been set.

### GetContainsDataAccess

`func (o *ReviewableEntitlement) GetContainsDataAccess() bool`

GetContainsDataAccess returns the ContainsDataAccess field if non-nil, zero value otherwise.

### GetContainsDataAccessOk

`func (o *ReviewableEntitlement) GetContainsDataAccessOk() (*bool, bool)`

GetContainsDataAccessOk returns a tuple with the ContainsDataAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContainsDataAccess

`func (o *ReviewableEntitlement) SetContainsDataAccess(v bool)`

SetContainsDataAccess sets ContainsDataAccess field to given value.

### HasContainsDataAccess

`func (o *ReviewableEntitlement) HasContainsDataAccess() bool`

HasContainsDataAccess returns a boolean if a field has been set.

### GetDataAccess

`func (o *ReviewableEntitlement) GetDataAccess() DataAccess`

GetDataAccess returns the DataAccess field if non-nil, zero value otherwise.

### GetDataAccessOk

`func (o *ReviewableEntitlement) GetDataAccessOk() (*DataAccess, bool)`

GetDataAccessOk returns a tuple with the DataAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataAccess

`func (o *ReviewableEntitlement) SetDataAccess(v DataAccess)`

SetDataAccess sets DataAccess field to given value.

### HasDataAccess

`func (o *ReviewableEntitlement) HasDataAccess() bool`

HasDataAccess returns a boolean if a field has been set.

### SetDataAccessNil

`func (o *ReviewableEntitlement) SetDataAccessNil(b bool)`

 SetDataAccessNil sets the value for DataAccess to be an explicit nil

### UnsetDataAccess
`func (o *ReviewableEntitlement) UnsetDataAccess()`

UnsetDataAccess ensures that no value is present for DataAccess, not even an explicit nil
### GetAccount

`func (o *ReviewableEntitlement) GetAccount() ReviewableEntitlementAccount`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *ReviewableEntitlement) GetAccountOk() (*ReviewableEntitlementAccount, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *ReviewableEntitlement) SetAccount(v ReviewableEntitlementAccount)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *ReviewableEntitlement) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### SetAccountNil

`func (o *ReviewableEntitlement) SetAccountNil(b bool)`

 SetAccountNil sets the value for Account to be an explicit nil

### UnsetAccount
`func (o *ReviewableEntitlement) UnsetAccount()`

UnsetAccount ensures that no value is present for Account, not even an explicit nil

