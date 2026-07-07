---
id: v1-requesteditemstatus-provisioning-details
title: RequesteditemstatusProvisioningDetails
pagination_label: RequesteditemstatusProvisioningDetails
sidebar_label: RequesteditemstatusProvisioningDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RequesteditemstatusProvisioningDetails', 'V1RequesteditemstatusProvisioningDetails'] 
slug: /tools/sdk/go/accessrequests/models/requesteditemstatus-provisioning-details
tags: ['SDK', 'Software Development Kit', 'RequesteditemstatusProvisioningDetails', 'V1RequesteditemstatusProvisioningDetails']
---

# RequesteditemstatusProvisioningDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrderedSubPhaseReferences** | Pointer to **string** | Ordered CSV of sub phase references to objects that contain more information about provisioning. For example, this can contain \"manualWorkItemDetails\" which indicate that there is further information in that object for this phase. | [optional] 

## Methods

### NewRequesteditemstatusProvisioningDetails

`func NewRequesteditemstatusProvisioningDetails() *RequesteditemstatusProvisioningDetails`

NewRequesteditemstatusProvisioningDetails instantiates a new RequesteditemstatusProvisioningDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequesteditemstatusProvisioningDetailsWithDefaults

`func NewRequesteditemstatusProvisioningDetailsWithDefaults() *RequesteditemstatusProvisioningDetails`

NewRequesteditemstatusProvisioningDetailsWithDefaults instantiates a new RequesteditemstatusProvisioningDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOrderedSubPhaseReferences

`func (o *RequesteditemstatusProvisioningDetails) GetOrderedSubPhaseReferences() string`

GetOrderedSubPhaseReferences returns the OrderedSubPhaseReferences field if non-nil, zero value otherwise.

### GetOrderedSubPhaseReferencesOk

`func (o *RequesteditemstatusProvisioningDetails) GetOrderedSubPhaseReferencesOk() (*string, bool)`

GetOrderedSubPhaseReferencesOk returns a tuple with the OrderedSubPhaseReferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderedSubPhaseReferences

`func (o *RequesteditemstatusProvisioningDetails) SetOrderedSubPhaseReferences(v string)`

SetOrderedSubPhaseReferences sets OrderedSubPhaseReferences field to given value.

### HasOrderedSubPhaseReferences

`func (o *RequesteditemstatusProvisioningDetails) HasOrderedSubPhaseReferences() bool`

HasOrderedSubPhaseReferences returns a boolean if a field has been set.


