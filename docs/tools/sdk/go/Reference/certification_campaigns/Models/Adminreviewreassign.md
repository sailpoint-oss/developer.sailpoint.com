---
id: v1-adminreviewreassign
title: Adminreviewreassign
pagination_label: Adminreviewreassign
sidebar_label: Adminreviewreassign
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Adminreviewreassign', 'V1Adminreviewreassign'] 
slug: /tools/sdk/go/certificationcampaigns/models/adminreviewreassign
tags: ['SDK', 'Software Development Kit', 'Adminreviewreassign', 'V1Adminreviewreassign']
---

# Adminreviewreassign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CertificationIds** | Pointer to **[]string** | List of certification IDs to reassign | [optional] 
**ReassignTo** | Pointer to [**AdminreviewreassignReassignTo**](adminreviewreassign-reassign-to) |  | [optional] 
**Reason** | Pointer to **string** | Comment to explain why the certification was reassigned | [optional] 

## Methods

### NewAdminreviewreassign

`func NewAdminreviewreassign() *Adminreviewreassign`

NewAdminreviewreassign instantiates a new Adminreviewreassign object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAdminreviewreassignWithDefaults

`func NewAdminreviewreassignWithDefaults() *Adminreviewreassign`

NewAdminreviewreassignWithDefaults instantiates a new Adminreviewreassign object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCertificationIds

`func (o *Adminreviewreassign) GetCertificationIds() []string`

GetCertificationIds returns the CertificationIds field if non-nil, zero value otherwise.

### GetCertificationIdsOk

`func (o *Adminreviewreassign) GetCertificationIdsOk() (*[]string, bool)`

GetCertificationIdsOk returns a tuple with the CertificationIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificationIds

`func (o *Adminreviewreassign) SetCertificationIds(v []string)`

SetCertificationIds sets CertificationIds field to given value.

### HasCertificationIds

`func (o *Adminreviewreassign) HasCertificationIds() bool`

HasCertificationIds returns a boolean if a field has been set.

### GetReassignTo

`func (o *Adminreviewreassign) GetReassignTo() AdminreviewreassignReassignTo`

GetReassignTo returns the ReassignTo field if non-nil, zero value otherwise.

### GetReassignToOk

`func (o *Adminreviewreassign) GetReassignToOk() (*AdminreviewreassignReassignTo, bool)`

GetReassignToOk returns a tuple with the ReassignTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignTo

`func (o *Adminreviewreassign) SetReassignTo(v AdminreviewreassignReassignTo)`

SetReassignTo sets ReassignTo field to given value.

### HasReassignTo

`func (o *Adminreviewreassign) HasReassignTo() bool`

HasReassignTo returns a boolean if a field has been set.

### GetReason

`func (o *Adminreviewreassign) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *Adminreviewreassign) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *Adminreviewreassign) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *Adminreviewreassign) HasReason() bool`

HasReason returns a boolean if a field has been set.


