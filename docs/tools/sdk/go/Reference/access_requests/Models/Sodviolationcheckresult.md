---
id: v1-sodviolationcheckresult
title: Sodviolationcheckresult
pagination_label: Sodviolationcheckresult
sidebar_label: Sodviolationcheckresult
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sodviolationcheckresult', 'V1Sodviolationcheckresult'] 
slug: /tools/sdk/go/accessrequests/models/sodviolationcheckresult
tags: ['SDK', 'Software Development Kit', 'Sodviolationcheckresult', 'V1Sodviolationcheckresult']
---

# Sodviolationcheckresult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to [**Errormessagedto**](errormessagedto) |  | [optional] 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [optional] 
**ViolationContexts** | Pointer to [**[]Sodviolationcontext**](sodviolationcontext) |  | [optional] 
**ViolatedPolicies** | Pointer to [**[]Sodpolicydto**](sodpolicydto) | A list of the SOD policies that were violated. | [optional] 

## Methods

### NewSodviolationcheckresult

`func NewSodviolationcheckresult() *Sodviolationcheckresult`

NewSodviolationcheckresult instantiates a new Sodviolationcheckresult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodviolationcheckresultWithDefaults

`func NewSodviolationcheckresultWithDefaults() *Sodviolationcheckresult`

NewSodviolationcheckresultWithDefaults instantiates a new Sodviolationcheckresult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *Sodviolationcheckresult) GetMessage() Errormessagedto`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *Sodviolationcheckresult) GetMessageOk() (*Errormessagedto, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *Sodviolationcheckresult) SetMessage(v Errormessagedto)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *Sodviolationcheckresult) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetClientMetadata

`func (o *Sodviolationcheckresult) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *Sodviolationcheckresult) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *Sodviolationcheckresult) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *Sodviolationcheckresult) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### SetClientMetadataNil

`func (o *Sodviolationcheckresult) SetClientMetadataNil(b bool)`

 SetClientMetadataNil sets the value for ClientMetadata to be an explicit nil

### UnsetClientMetadata
`func (o *Sodviolationcheckresult) UnsetClientMetadata()`

UnsetClientMetadata ensures that no value is present for ClientMetadata, not even an explicit nil
### GetViolationContexts

`func (o *Sodviolationcheckresult) GetViolationContexts() []Sodviolationcontext`

GetViolationContexts returns the ViolationContexts field if non-nil, zero value otherwise.

### GetViolationContextsOk

`func (o *Sodviolationcheckresult) GetViolationContextsOk() (*[]Sodviolationcontext, bool)`

GetViolationContextsOk returns a tuple with the ViolationContexts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViolationContexts

`func (o *Sodviolationcheckresult) SetViolationContexts(v []Sodviolationcontext)`

SetViolationContexts sets ViolationContexts field to given value.

### HasViolationContexts

`func (o *Sodviolationcheckresult) HasViolationContexts() bool`

HasViolationContexts returns a boolean if a field has been set.

### SetViolationContextsNil

`func (o *Sodviolationcheckresult) SetViolationContextsNil(b bool)`

 SetViolationContextsNil sets the value for ViolationContexts to be an explicit nil

### UnsetViolationContexts
`func (o *Sodviolationcheckresult) UnsetViolationContexts()`

UnsetViolationContexts ensures that no value is present for ViolationContexts, not even an explicit nil
### GetViolatedPolicies

`func (o *Sodviolationcheckresult) GetViolatedPolicies() []Sodpolicydto`

GetViolatedPolicies returns the ViolatedPolicies field if non-nil, zero value otherwise.

### GetViolatedPoliciesOk

`func (o *Sodviolationcheckresult) GetViolatedPoliciesOk() (*[]Sodpolicydto, bool)`

GetViolatedPoliciesOk returns a tuple with the ViolatedPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViolatedPolicies

`func (o *Sodviolationcheckresult) SetViolatedPolicies(v []Sodpolicydto)`

SetViolatedPolicies sets ViolatedPolicies field to given value.

### HasViolatedPolicies

`func (o *Sodviolationcheckresult) HasViolatedPolicies() bool`

HasViolatedPolicies returns a boolean if a field has been set.

### SetViolatedPoliciesNil

`func (o *Sodviolationcheckresult) SetViolatedPoliciesNil(b bool)`

 SetViolatedPoliciesNil sets the value for ViolatedPolicies to be an explicit nil

### UnsetViolatedPolicies
`func (o *Sodviolationcheckresult) UnsetViolatedPolicies()`

UnsetViolatedPolicies ensures that no value is present for ViolatedPolicies, not even an explicit nil

