---
id: v2024-identity-entitlement-details-entitlement-dto
title: IdentityEntitlementDetailsEntitlementDto
pagination_label: IdentityEntitlementDetailsEntitlementDto
sidebar_label: IdentityEntitlementDetailsEntitlementDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityEntitlementDetailsEntitlementDto', 'V2024IdentityEntitlementDetailsEntitlementDto'] 
slug: /tools/sdk/go/v2024/models/identity-entitlement-details-entitlement-dto
tags: ['SDK', 'Software Development Kit', 'IdentityEntitlementDetailsEntitlementDto', 'V2024IdentityEntitlementDetailsEntitlementDto']
---

# IdentityEntitlementDetailsEntitlementDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The entitlement id | [optional] 
**Name** | Pointer to **string** | The entitlement name | [optional] 
**Created** | Pointer to **SailPointTime** | Time when the entitlement was last modified | [optional] 
**Modified** | Pointer to **SailPointTime** | Time when the entitlement was last modified | [optional] 
**Description** | Pointer to **NullableString** | The description of the entitlement | [optional] 
**Type** | Pointer to **string** | The type of the object, will always be \"ENTITLEMENT\" | [optional] 
**SourceId** | Pointer to **string** | The source ID | [optional] 
**SourceName** | Pointer to **string** | The source name | [optional] 
**Owner** | Pointer to [**OwnerDto**](owner-dto) |  | [optional] 
**Value** | Pointer to **string** | The value of the entitlement | [optional] 
**Flags** | Pointer to **[]string** | a list of properties informing the viewer about the entitlement | [optional] 

## Methods

### NewIdentityEntitlementDetailsEntitlementDto

`func NewIdentityEntitlementDetailsEntitlementDto() *IdentityEntitlementDetailsEntitlementDto`

NewIdentityEntitlementDetailsEntitlementDto instantiates a new IdentityEntitlementDetailsEntitlementDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityEntitlementDetailsEntitlementDtoWithDefaults

`func NewIdentityEntitlementDetailsEntitlementDtoWithDefaults() *IdentityEntitlementDetailsEntitlementDto`

NewIdentityEntitlementDetailsEntitlementDtoWithDefaults instantiates a new IdentityEntitlementDetailsEntitlementDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *IdentityEntitlementDetailsEntitlementDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentityEntitlementDetailsEntitlementDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentityEntitlementDetailsEntitlementDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *IdentityEntitlementDetailsEntitlementDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *IdentityEntitlementDetailsEntitlementDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IdentityEntitlementDetailsEntitlementDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IdentityEntitlementDetailsEntitlementDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *IdentityEntitlementDetailsEntitlementDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *IdentityEntitlementDetailsEntitlementDto) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *IdentityEntitlementDetailsEntitlementDto) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *IdentityEntitlementDetailsEntitlementDto) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *IdentityEntitlementDetailsEntitlementDto) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *IdentityEntitlementDetailsEntitlementDto) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *IdentityEntitlementDetailsEntitlementDto) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *IdentityEntitlementDetailsEntitlementDto) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *IdentityEntitlementDetailsEntitlementDto) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *IdentityEntitlementDetailsEntitlementDto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *IdentityEntitlementDetailsEntitlementDto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *IdentityEntitlementDetailsEntitlementDto) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *IdentityEntitlementDetailsEntitlementDto) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *IdentityEntitlementDetailsEntitlementDto) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *IdentityEntitlementDetailsEntitlementDto) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetType

`func (o *IdentityEntitlementDetailsEntitlementDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IdentityEntitlementDetailsEntitlementDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IdentityEntitlementDetailsEntitlementDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *IdentityEntitlementDetailsEntitlementDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetSourceId

`func (o *IdentityEntitlementDetailsEntitlementDto) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *IdentityEntitlementDetailsEntitlementDto) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *IdentityEntitlementDetailsEntitlementDto) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *IdentityEntitlementDetailsEntitlementDto) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetSourceName

`func (o *IdentityEntitlementDetailsEntitlementDto) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *IdentityEntitlementDetailsEntitlementDto) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *IdentityEntitlementDetailsEntitlementDto) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *IdentityEntitlementDetailsEntitlementDto) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetOwner

`func (o *IdentityEntitlementDetailsEntitlementDto) GetOwner() OwnerDto`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *IdentityEntitlementDetailsEntitlementDto) GetOwnerOk() (*OwnerDto, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *IdentityEntitlementDetailsEntitlementDto) SetOwner(v OwnerDto)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *IdentityEntitlementDetailsEntitlementDto) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetValue

`func (o *IdentityEntitlementDetailsEntitlementDto) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *IdentityEntitlementDetailsEntitlementDto) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *IdentityEntitlementDetailsEntitlementDto) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *IdentityEntitlementDetailsEntitlementDto) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetFlags

`func (o *IdentityEntitlementDetailsEntitlementDto) GetFlags() []string`

GetFlags returns the Flags field if non-nil, zero value otherwise.

### GetFlagsOk

`func (o *IdentityEntitlementDetailsEntitlementDto) GetFlagsOk() (*[]string, bool)`

GetFlagsOk returns a tuple with the Flags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFlags

`func (o *IdentityEntitlementDetailsEntitlementDto) SetFlags(v []string)`

SetFlags sets Flags field to given value.

### HasFlags

`func (o *IdentityEntitlementDetailsEntitlementDto) HasFlags() bool`

HasFlags returns a boolean if a field has been set.


