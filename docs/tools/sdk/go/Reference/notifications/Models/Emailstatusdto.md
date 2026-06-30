---
id: v1-emailstatusdto
title: Emailstatusdto
pagination_label: Emailstatusdto
sidebar_label: Emailstatusdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Emailstatusdto', 'V1Emailstatusdto'] 
slug: /tools/sdk/go/notifications/models/emailstatusdto
tags: ['SDK', 'Software Development Kit', 'Emailstatusdto', 'V1Emailstatusdto']
---

# Emailstatusdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **NullableString** | Unique identifier for the verified sender address | [optional] 
**Email** | Pointer to **string** | The verified sender email address | [optional] 
**IsVerifiedByDomain** | Pointer to **bool** | Whether the sender address is verified by domain | [optional] [default to false]
**VerificationStatus** | Pointer to **string** | The verification status of the sender address | [optional] 
**Region** | Pointer to **NullableString** | The AWS SES region the sender address is associated with | [optional] 

## Methods

### NewEmailstatusdto

`func NewEmailstatusdto() *Emailstatusdto`

NewEmailstatusdto instantiates a new Emailstatusdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEmailstatusdtoWithDefaults

`func NewEmailstatusdtoWithDefaults() *Emailstatusdto`

NewEmailstatusdtoWithDefaults instantiates a new Emailstatusdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Emailstatusdto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Emailstatusdto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Emailstatusdto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Emailstatusdto) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *Emailstatusdto) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *Emailstatusdto) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetEmail

`func (o *Emailstatusdto) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *Emailstatusdto) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *Emailstatusdto) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *Emailstatusdto) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetIsVerifiedByDomain

`func (o *Emailstatusdto) GetIsVerifiedByDomain() bool`

GetIsVerifiedByDomain returns the IsVerifiedByDomain field if non-nil, zero value otherwise.

### GetIsVerifiedByDomainOk

`func (o *Emailstatusdto) GetIsVerifiedByDomainOk() (*bool, bool)`

GetIsVerifiedByDomainOk returns a tuple with the IsVerifiedByDomain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsVerifiedByDomain

`func (o *Emailstatusdto) SetIsVerifiedByDomain(v bool)`

SetIsVerifiedByDomain sets IsVerifiedByDomain field to given value.

### HasIsVerifiedByDomain

`func (o *Emailstatusdto) HasIsVerifiedByDomain() bool`

HasIsVerifiedByDomain returns a boolean if a field has been set.

### GetVerificationStatus

`func (o *Emailstatusdto) GetVerificationStatus() string`

GetVerificationStatus returns the VerificationStatus field if non-nil, zero value otherwise.

### GetVerificationStatusOk

`func (o *Emailstatusdto) GetVerificationStatusOk() (*string, bool)`

GetVerificationStatusOk returns a tuple with the VerificationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerificationStatus

`func (o *Emailstatusdto) SetVerificationStatus(v string)`

SetVerificationStatus sets VerificationStatus field to given value.

### HasVerificationStatus

`func (o *Emailstatusdto) HasVerificationStatus() bool`

HasVerificationStatus returns a boolean if a field has been set.

### GetRegion

`func (o *Emailstatusdto) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *Emailstatusdto) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *Emailstatusdto) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *Emailstatusdto) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### SetRegionNil

`func (o *Emailstatusdto) SetRegionNil(b bool)`

 SetRegionNil sets the value for Region to be an explicit nil

### UnsetRegion
`func (o *Emailstatusdto) UnsetRegion()`

UnsetRegion ensures that no value is present for Region, not even an explicit nil

