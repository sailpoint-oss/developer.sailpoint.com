---
id: v1-approvalrequestedtarget
title: Approvalrequestedtarget
pagination_label: Approvalrequestedtarget
sidebar_label: Approvalrequestedtarget
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvalrequestedtarget', 'V1Approvalrequestedtarget'] 
slug: /tools/sdk/go/approvals/models/approvalrequestedtarget
tags: ['SDK', 'Software Development Kit', 'Approvalrequestedtarget', 'V1Approvalrequestedtarget']
---

# Approvalrequestedtarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ForcedAuthSignature** | Pointer to **string** | Signature required for forced authentication. | [optional] 
**Id** | Pointer to **string** | ID of the requested target. | [optional] 
**Name** | Pointer to **string** | Name of the requested target. | [optional] 
**ReauthRequired** | Pointer to **bool** | Indicates if reauthentication is required. | [optional] [default to false]
**RemovalDate** | Pointer to **SailPointTime** | Date when the target will be removed. | [optional] 
**RequestType** | Pointer to **string** | Type of the request. | [optional] 
**TargetType** | Pointer to **string** | Type of the target. | [optional] 

## Methods

### NewApprovalrequestedtarget

`func NewApprovalrequestedtarget() *Approvalrequestedtarget`

NewApprovalrequestedtarget instantiates a new Approvalrequestedtarget object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalrequestedtargetWithDefaults

`func NewApprovalrequestedtargetWithDefaults() *Approvalrequestedtarget`

NewApprovalrequestedtargetWithDefaults instantiates a new Approvalrequestedtarget object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetForcedAuthSignature

`func (o *Approvalrequestedtarget) GetForcedAuthSignature() string`

GetForcedAuthSignature returns the ForcedAuthSignature field if non-nil, zero value otherwise.

### GetForcedAuthSignatureOk

`func (o *Approvalrequestedtarget) GetForcedAuthSignatureOk() (*string, bool)`

GetForcedAuthSignatureOk returns a tuple with the ForcedAuthSignature field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForcedAuthSignature

`func (o *Approvalrequestedtarget) SetForcedAuthSignature(v string)`

SetForcedAuthSignature sets ForcedAuthSignature field to given value.

### HasForcedAuthSignature

`func (o *Approvalrequestedtarget) HasForcedAuthSignature() bool`

HasForcedAuthSignature returns a boolean if a field has been set.

### GetId

`func (o *Approvalrequestedtarget) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Approvalrequestedtarget) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Approvalrequestedtarget) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Approvalrequestedtarget) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Approvalrequestedtarget) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Approvalrequestedtarget) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Approvalrequestedtarget) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Approvalrequestedtarget) HasName() bool`

HasName returns a boolean if a field has been set.

### GetReauthRequired

`func (o *Approvalrequestedtarget) GetReauthRequired() bool`

GetReauthRequired returns the ReauthRequired field if non-nil, zero value otherwise.

### GetReauthRequiredOk

`func (o *Approvalrequestedtarget) GetReauthRequiredOk() (*bool, bool)`

GetReauthRequiredOk returns a tuple with the ReauthRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReauthRequired

`func (o *Approvalrequestedtarget) SetReauthRequired(v bool)`

SetReauthRequired sets ReauthRequired field to given value.

### HasReauthRequired

`func (o *Approvalrequestedtarget) HasReauthRequired() bool`

HasReauthRequired returns a boolean if a field has been set.

### GetRemovalDate

`func (o *Approvalrequestedtarget) GetRemovalDate() SailPointTime`

GetRemovalDate returns the RemovalDate field if non-nil, zero value otherwise.

### GetRemovalDateOk

`func (o *Approvalrequestedtarget) GetRemovalDateOk() (*SailPointTime, bool)`

GetRemovalDateOk returns a tuple with the RemovalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemovalDate

`func (o *Approvalrequestedtarget) SetRemovalDate(v SailPointTime)`

SetRemovalDate sets RemovalDate field to given value.

### HasRemovalDate

`func (o *Approvalrequestedtarget) HasRemovalDate() bool`

HasRemovalDate returns a boolean if a field has been set.

### GetRequestType

`func (o *Approvalrequestedtarget) GetRequestType() string`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *Approvalrequestedtarget) GetRequestTypeOk() (*string, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *Approvalrequestedtarget) SetRequestType(v string)`

SetRequestType sets RequestType field to given value.

### HasRequestType

`func (o *Approvalrequestedtarget) HasRequestType() bool`

HasRequestType returns a boolean if a field has been set.

### GetTargetType

`func (o *Approvalrequestedtarget) GetTargetType() string`

GetTargetType returns the TargetType field if non-nil, zero value otherwise.

### GetTargetTypeOk

`func (o *Approvalrequestedtarget) GetTargetTypeOk() (*string, bool)`

GetTargetTypeOk returns a tuple with the TargetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetType

`func (o *Approvalrequestedtarget) SetTargetType(v string)`

SetTargetType sets TargetType field to given value.

### HasTargetType

`func (o *Approvalrequestedtarget) HasTargetType() bool`

HasTargetType returns a boolean if a field has been set.


