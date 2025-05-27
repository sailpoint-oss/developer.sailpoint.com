---
id: federation-protocol-details
title: FederationProtocolDetails
pagination_label: FederationProtocolDetails
sidebar_label: FederationProtocolDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'FederationProtocolDetails', 'FederationProtocolDetails'] 
slug: /tools/sdk/go/v3/models/federation-protocol-details
tags: ['SDK', 'Software Development Kit', 'FederationProtocolDetails', 'FederationProtocolDetails']
---

# FederationProtocolDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Role** | Pointer to **string** | Federation protocol role | [optional] 
**EntityId** | Pointer to **string** | An entity ID is a globally unique name for a SAML entity, either an Identity Provider (IDP) or a Service Provider (SP). | [optional] 

## Methods

### NewFederationProtocolDetails

`func NewFederationProtocolDetails() *FederationProtocolDetails`

NewFederationProtocolDetails instantiates a new FederationProtocolDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFederationProtocolDetailsWithDefaults

`func NewFederationProtocolDetailsWithDefaults() *FederationProtocolDetails`

NewFederationProtocolDetailsWithDefaults instantiates a new FederationProtocolDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRole

`func (o *FederationProtocolDetails) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *FederationProtocolDetails) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *FederationProtocolDetails) SetRole(v string)`

SetRole sets Role field to given value.

### HasRole

`func (o *FederationProtocolDetails) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetEntityId

`func (o *FederationProtocolDetails) GetEntityId() string`

GetEntityId returns the EntityId field if non-nil, zero value otherwise.

### GetEntityIdOk

`func (o *FederationProtocolDetails) GetEntityIdOk() (*string, bool)`

GetEntityIdOk returns a tuple with the EntityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityId

`func (o *FederationProtocolDetails) SetEntityId(v string)`

SetEntityId sets EntityId field to given value.

### HasEntityId

`func (o *FederationProtocolDetails) HasEntityId() bool`

HasEntityId returns a boolean if a field has been set.


