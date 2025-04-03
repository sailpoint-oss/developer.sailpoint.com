---
id: v2025-reviewable-entitlement-account-owner
title: ReviewableEntitlementAccountOwner
pagination_label: ReviewableEntitlementAccountOwner
sidebar_label: ReviewableEntitlementAccountOwner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ReviewableEntitlementAccountOwner', 'V2025ReviewableEntitlementAccountOwner'] 
slug: /tools/sdk/go/v2025/models/reviewable-entitlement-account-owner
tags: ['SDK', 'Software Development Kit', 'ReviewableEntitlementAccountOwner', 'V2025ReviewableEntitlementAccountOwner']
---

# ReviewableEntitlementAccountOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **NullableString** | The id associated with the machine account owner | [optional] 
**Type** | Pointer to **string** | An enumeration of the types of Owner supported within the IdentityNow infrastructure. | [optional] 
**DisplayName** | Pointer to **NullableString** | The machine account owner's display name | [optional] 

## Methods

### NewReviewableEntitlementAccountOwner

`func NewReviewableEntitlementAccountOwner() *ReviewableEntitlementAccountOwner`

NewReviewableEntitlementAccountOwner instantiates a new ReviewableEntitlementAccountOwner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReviewableEntitlementAccountOwnerWithDefaults

`func NewReviewableEntitlementAccountOwnerWithDefaults() *ReviewableEntitlementAccountOwner`

NewReviewableEntitlementAccountOwnerWithDefaults instantiates a new ReviewableEntitlementAccountOwner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ReviewableEntitlementAccountOwner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ReviewableEntitlementAccountOwner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ReviewableEntitlementAccountOwner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ReviewableEntitlementAccountOwner) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *ReviewableEntitlementAccountOwner) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *ReviewableEntitlementAccountOwner) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetType

`func (o *ReviewableEntitlementAccountOwner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ReviewableEntitlementAccountOwner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ReviewableEntitlementAccountOwner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ReviewableEntitlementAccountOwner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetDisplayName

`func (o *ReviewableEntitlementAccountOwner) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *ReviewableEntitlementAccountOwner) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *ReviewableEntitlementAccountOwner) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *ReviewableEntitlementAccountOwner) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### SetDisplayNameNil

`func (o *ReviewableEntitlementAccountOwner) SetDisplayNameNil(b bool)`

 SetDisplayNameNil sets the value for DisplayName to be an explicit nil

### UnsetDisplayName
`func (o *ReviewableEntitlementAccountOwner) UnsetDisplayName()`

UnsetDisplayName ensures that no value is present for DisplayName, not even an explicit nil

