---
id: v1-provisioningdetails
title: Provisioningdetails
pagination_label: Provisioningdetails
sidebar_label: Provisioningdetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Provisioningdetails', 'V1Provisioningdetails'] 
slug: /tools/sdk/go/accessrequests/models/provisioningdetails
tags: ['SDK', 'Software Development Kit', 'Provisioningdetails', 'V1Provisioningdetails']
---

# Provisioningdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrderedSubPhaseReferences** | Pointer to **string** | Ordered CSV of sub phase references to objects that contain more information about provisioning. For example, this can contain \"manualWorkItemDetails\" which indicate that there is further information in that object for this phase. | [optional] 

## Methods

### NewProvisioningdetails

`func NewProvisioningdetails() *Provisioningdetails`

NewProvisioningdetails instantiates a new Provisioningdetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProvisioningdetailsWithDefaults

`func NewProvisioningdetailsWithDefaults() *Provisioningdetails`

NewProvisioningdetailsWithDefaults instantiates a new Provisioningdetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOrderedSubPhaseReferences

`func (o *Provisioningdetails) GetOrderedSubPhaseReferences() string`

GetOrderedSubPhaseReferences returns the OrderedSubPhaseReferences field if non-nil, zero value otherwise.

### GetOrderedSubPhaseReferencesOk

`func (o *Provisioningdetails) GetOrderedSubPhaseReferencesOk() (*string, bool)`

GetOrderedSubPhaseReferencesOk returns a tuple with the OrderedSubPhaseReferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderedSubPhaseReferences

`func (o *Provisioningdetails) SetOrderedSubPhaseReferences(v string)`

SetOrderedSubPhaseReferences sets OrderedSubPhaseReferences field to given value.

### HasOrderedSubPhaseReferences

`func (o *Provisioningdetails) HasOrderedSubPhaseReferences() bool`

HasOrderedSubPhaseReferences returns a boolean if a field has been set.


