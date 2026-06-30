---
id: v1-bulkapproveentitlementrecommendationresult
title: Bulkapproveentitlementrecommendationresult
pagination_label: Bulkapproveentitlementrecommendationresult
sidebar_label: Bulkapproveentitlementrecommendationresult
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Bulkapproveentitlementrecommendationresult', 'V1Bulkapproveentitlementrecommendationresult'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/bulkapproveentitlementrecommendationresult
tags: ['SDK', 'Software Development Kit', 'Bulkapproveentitlementrecommendationresult', 'V1Bulkapproveentitlementrecommendationresult']
---

# Bulkapproveentitlementrecommendationresult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique identifier of the processed recommendation record. | [optional] 
**Status** | Pointer to **string** | The outcome of the approval for this item. | [optional] 
**FailedReason** | Pointer to **NullableString** | The reason for failure if status is FAILURE; null on success. | [optional] 

## Methods

### NewBulkapproveentitlementrecommendationresult

`func NewBulkapproveentitlementrecommendationresult() *Bulkapproveentitlementrecommendationresult`

NewBulkapproveentitlementrecommendationresult instantiates a new Bulkapproveentitlementrecommendationresult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkapproveentitlementrecommendationresultWithDefaults

`func NewBulkapproveentitlementrecommendationresultWithDefaults() *Bulkapproveentitlementrecommendationresult`

NewBulkapproveentitlementrecommendationresultWithDefaults instantiates a new Bulkapproveentitlementrecommendationresult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Bulkapproveentitlementrecommendationresult) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Bulkapproveentitlementrecommendationresult) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Bulkapproveentitlementrecommendationresult) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Bulkapproveentitlementrecommendationresult) HasId() bool`

HasId returns a boolean if a field has been set.

### GetStatus

`func (o *Bulkapproveentitlementrecommendationresult) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Bulkapproveentitlementrecommendationresult) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Bulkapproveentitlementrecommendationresult) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Bulkapproveentitlementrecommendationresult) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetFailedReason

`func (o *Bulkapproveentitlementrecommendationresult) GetFailedReason() string`

GetFailedReason returns the FailedReason field if non-nil, zero value otherwise.

### GetFailedReasonOk

`func (o *Bulkapproveentitlementrecommendationresult) GetFailedReasonOk() (*string, bool)`

GetFailedReasonOk returns a tuple with the FailedReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailedReason

`func (o *Bulkapproveentitlementrecommendationresult) SetFailedReason(v string)`

SetFailedReason sets FailedReason field to given value.

### HasFailedReason

`func (o *Bulkapproveentitlementrecommendationresult) HasFailedReason() bool`

HasFailedReason returns a boolean if a field has been set.

### SetFailedReasonNil

`func (o *Bulkapproveentitlementrecommendationresult) SetFailedReasonNil(b bool)`

 SetFailedReasonNil sets the value for FailedReason to be an explicit nil

### UnsetFailedReason
`func (o *Bulkapproveentitlementrecommendationresult) UnsetFailedReason()`

UnsetFailedReason ensures that no value is present for FailedReason, not even an explicit nil

