---
id: v1-identityentitlementdetailsentitlementdto
title: Identityentitlementdetailsentitlementdto
pagination_label: Identityentitlementdetailsentitlementdto
sidebar_label: Identityentitlementdetailsentitlementdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identityentitlementdetailsentitlementdto', 'V1Identityentitlementdetailsentitlementdto'] 
slug: /tools/sdk/go/accessrequests/models/identityentitlementdetailsentitlementdto
tags: ['SDK', 'Software Development Kit', 'Identityentitlementdetailsentitlementdto', 'V1Identityentitlementdetailsentitlementdto']
---

# Identityentitlementdetailsentitlementdto

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
**Owner** | Pointer to [**Ownerdto**](ownerdto) |  | [optional] 
**Value** | Pointer to **string** | The value of the entitlement | [optional] 
**Flags** | Pointer to **[]string** | a list of properties informing the viewer about the entitlement | [optional] 

## Methods

### NewIdentityentitlementdetailsentitlementdto

`func NewIdentityentitlementdetailsentitlementdto() *Identityentitlementdetailsentitlementdto`

NewIdentityentitlementdetailsentitlementdto instantiates a new Identityentitlementdetailsentitlementdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityentitlementdetailsentitlementdtoWithDefaults

`func NewIdentityentitlementdetailsentitlementdtoWithDefaults() *Identityentitlementdetailsentitlementdto`

NewIdentityentitlementdetailsentitlementdtoWithDefaults instantiates a new Identityentitlementdetailsentitlementdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Identityentitlementdetailsentitlementdto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Identityentitlementdetailsentitlementdto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Identityentitlementdetailsentitlementdto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Identityentitlementdetailsentitlementdto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Identityentitlementdetailsentitlementdto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Identityentitlementdetailsentitlementdto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Identityentitlementdetailsentitlementdto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Identityentitlementdetailsentitlementdto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *Identityentitlementdetailsentitlementdto) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Identityentitlementdetailsentitlementdto) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Identityentitlementdetailsentitlementdto) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Identityentitlementdetailsentitlementdto) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Identityentitlementdetailsentitlementdto) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Identityentitlementdetailsentitlementdto) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Identityentitlementdetailsentitlementdto) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Identityentitlementdetailsentitlementdto) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *Identityentitlementdetailsentitlementdto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Identityentitlementdetailsentitlementdto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Identityentitlementdetailsentitlementdto) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Identityentitlementdetailsentitlementdto) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Identityentitlementdetailsentitlementdto) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Identityentitlementdetailsentitlementdto) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetType

`func (o *Identityentitlementdetailsentitlementdto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Identityentitlementdetailsentitlementdto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Identityentitlementdetailsentitlementdto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Identityentitlementdetailsentitlementdto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetSourceId

`func (o *Identityentitlementdetailsentitlementdto) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Identityentitlementdetailsentitlementdto) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Identityentitlementdetailsentitlementdto) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Identityentitlementdetailsentitlementdto) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetSourceName

`func (o *Identityentitlementdetailsentitlementdto) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *Identityentitlementdetailsentitlementdto) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *Identityentitlementdetailsentitlementdto) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *Identityentitlementdetailsentitlementdto) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetOwner

`func (o *Identityentitlementdetailsentitlementdto) GetOwner() Ownerdto`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Identityentitlementdetailsentitlementdto) GetOwnerOk() (*Ownerdto, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Identityentitlementdetailsentitlementdto) SetOwner(v Ownerdto)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Identityentitlementdetailsentitlementdto) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetValue

`func (o *Identityentitlementdetailsentitlementdto) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Identityentitlementdetailsentitlementdto) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Identityentitlementdetailsentitlementdto) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Identityentitlementdetailsentitlementdto) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetFlags

`func (o *Identityentitlementdetailsentitlementdto) GetFlags() []string`

GetFlags returns the Flags field if non-nil, zero value otherwise.

### GetFlagsOk

`func (o *Identityentitlementdetailsentitlementdto) GetFlagsOk() (*[]string, bool)`

GetFlagsOk returns a tuple with the Flags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFlags

`func (o *Identityentitlementdetailsentitlementdto) SetFlags(v []string)`

SetFlags sets Flags field to given value.

### HasFlags

`func (o *Identityentitlementdetailsentitlementdto) HasFlags() bool`

HasFlags returns a boolean if a field has been set.


