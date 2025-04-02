---
id: provisioning-details
title: ProvisioningDetails
pagination_label: ProvisioningDetails
sidebar_label: ProvisioningDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ProvisioningDetails', 'ProvisioningDetails'] 
slug: /tools/sdk/go//models/provisioning-details
tags: ['SDK', 'Software Development Kit', 'ProvisioningDetails', 'ProvisioningDetails']
---

# ProvisioningDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrderedSubPhaseReferences** | Pointer to **string** | Ordered CSV of sub phase references to objects that contain more information about provisioning. For example, this can contain \"manualWorkItemDetails\" which indicate that there is further information in that object for this phase. | [optional] 

## Methods

### NewProvisioningDetails

`func NewProvisioningDetails() *ProvisioningDetails`

NewProvisioningDetails instantiates a new ProvisioningDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProvisioningDetailsWithDefaults

`func NewProvisioningDetailsWithDefaults() *ProvisioningDetails`

NewProvisioningDetailsWithDefaults instantiates a new ProvisioningDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOrderedSubPhaseReferences

`func (o *ProvisioningDetails) GetOrderedSubPhaseReferences() string`

GetOrderedSubPhaseReferences returns the OrderedSubPhaseReferences field if non-nil, zero value otherwise.

### GetOrderedSubPhaseReferencesOk

`func (o *ProvisioningDetails) GetOrderedSubPhaseReferencesOk() (*string, bool)`

GetOrderedSubPhaseReferencesOk returns a tuple with the OrderedSubPhaseReferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderedSubPhaseReferences

`func (o *ProvisioningDetails) SetOrderedSubPhaseReferences(v string)`

SetOrderedSubPhaseReferences sets OrderedSubPhaseReferences field to given value.

### HasOrderedSubPhaseReferences

`func (o *ProvisioningDetails) HasOrderedSubPhaseReferences() bool`

HasOrderedSubPhaseReferences returns a boolean if a field has been set.


