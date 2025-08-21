---
id: managed-cluster
title: ManagedCluster
pagination_label: ManagedCluster
sidebar_label: ManagedCluster
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedCluster', 'ManagedCluster'] 
slug: /tools/sdk/go/v3/models/managed-cluster
tags: ['SDK', 'Software Development Kit', 'ManagedCluster', 'ManagedCluster']
---

# ManagedCluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | ManagedCluster ID | 
**Name** | Pointer to **string** | ManagedCluster name | [optional] 
**Pod** | Pointer to **string** | ManagedCluster pod | [optional] 
**Org** | Pointer to **string** | ManagedCluster org | [optional] 
**Type** | Pointer to [**ManagedClusterTypes**](managed-cluster-types) |  | [optional] 
**Configuration** | Pointer to **map[string]string** | ManagedProcess configuration map | [optional] 
**KeyPair** | Pointer to [**ManagedClusterKeyPair**](managed-cluster-key-pair) |  | [optional] 
**Attributes** | Pointer to [**ManagedClusterAttributes**](managed-cluster-attributes) |  | [optional] 
**Description** | Pointer to **string** | ManagedCluster description | [optional] [default to "q"]
**Redis** | Pointer to [**ManagedClusterRedis**](managed-cluster-redis) |  | [optional] 
**ClientType** | [**NullableManagedClientType**](managed-client-type) |  | 
**CcgVersion** | **string** | CCG version used by the ManagedCluster | 
**PinnedConfig** | Pointer to **bool** | boolean flag indicating whether or not the cluster configuration is pinned | [optional] [default to false]
**LogConfiguration** | Pointer to [**NullableClientLogConfiguration**](client-log-configuration) |  | [optional] 
**Operational** | Pointer to **bool** | Whether or not the cluster is operational or not | [optional] [default to false]
**Status** | Pointer to **string** | Cluster status | [optional] 
**PublicKeyCertificate** | Pointer to **NullableString** | Public key certificate | [optional] 
**PublicKeyThumbprint** | Pointer to **NullableString** | Public key thumbprint | [optional] 
**PublicKey** | Pointer to **NullableString** | Public key | [optional] 
**EncryptionConfiguration** | Pointer to [**ManagedClusterEncryptionConfig**](managed-cluster-encryption-config) |  | [optional] 
**AlertKey** | Pointer to **string** | Key describing any immediate cluster alerts | [optional] 
**ClientIds** | Pointer to **[]string** | List of clients in a cluster | [optional] 
**ServiceCount** | Pointer to **int32** | Number of services bound to a cluster | [optional] [default to 0]
**CcId** | Pointer to **string** | CC ID only used in calling CC, will be removed without notice when Migration to CEGS is finished | [optional] [default to "0"]
**CreatedAt** | Pointer to **NullableTime** | The date/time this cluster was created | [optional] 
**UpdatedAt** | Pointer to **NullableTime** | The date/time this cluster was last updated | [optional] 

## Methods

### NewManagedCluster

`func NewManagedCluster(id string, clientType NullableManagedClientType, ccgVersion string, ) *ManagedCluster`

NewManagedCluster instantiates a new ManagedCluster object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedClusterWithDefaults

`func NewManagedClusterWithDefaults() *ManagedCluster`

NewManagedClusterWithDefaults instantiates a new ManagedCluster object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ManagedCluster) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ManagedCluster) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ManagedCluster) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *ManagedCluster) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ManagedCluster) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ManagedCluster) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ManagedCluster) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPod

`func (o *ManagedCluster) GetPod() string`

GetPod returns the Pod field if non-nil, zero value otherwise.

### GetPodOk

`func (o *ManagedCluster) GetPodOk() (*string, bool)`

GetPodOk returns a tuple with the Pod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPod

`func (o *ManagedCluster) SetPod(v string)`

SetPod sets Pod field to given value.

### HasPod

`func (o *ManagedCluster) HasPod() bool`

HasPod returns a boolean if a field has been set.

### GetOrg

`func (o *ManagedCluster) GetOrg() string`

GetOrg returns the Org field if non-nil, zero value otherwise.

### GetOrgOk

`func (o *ManagedCluster) GetOrgOk() (*string, bool)`

GetOrgOk returns a tuple with the Org field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrg

`func (o *ManagedCluster) SetOrg(v string)`

SetOrg sets Org field to given value.

### HasOrg

`func (o *ManagedCluster) HasOrg() bool`

HasOrg returns a boolean if a field has been set.

### GetType

`func (o *ManagedCluster) GetType() ManagedClusterTypes`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ManagedCluster) GetTypeOk() (*ManagedClusterTypes, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ManagedCluster) SetType(v ManagedClusterTypes)`

SetType sets Type field to given value.

### HasType

`func (o *ManagedCluster) HasType() bool`

HasType returns a boolean if a field has been set.

### GetConfiguration

`func (o *ManagedCluster) GetConfiguration() map[string]string`

GetConfiguration returns the Configuration field if non-nil, zero value otherwise.

### GetConfigurationOk

`func (o *ManagedCluster) GetConfigurationOk() (*map[string]string, bool)`

GetConfigurationOk returns a tuple with the Configuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfiguration

`func (o *ManagedCluster) SetConfiguration(v map[string]string)`

SetConfiguration sets Configuration field to given value.

### HasConfiguration

`func (o *ManagedCluster) HasConfiguration() bool`

HasConfiguration returns a boolean if a field has been set.

### GetKeyPair

`func (o *ManagedCluster) GetKeyPair() ManagedClusterKeyPair`

GetKeyPair returns the KeyPair field if non-nil, zero value otherwise.

### GetKeyPairOk

`func (o *ManagedCluster) GetKeyPairOk() (*ManagedClusterKeyPair, bool)`

GetKeyPairOk returns a tuple with the KeyPair field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyPair

`func (o *ManagedCluster) SetKeyPair(v ManagedClusterKeyPair)`

SetKeyPair sets KeyPair field to given value.

### HasKeyPair

`func (o *ManagedCluster) HasKeyPair() bool`

HasKeyPair returns a boolean if a field has been set.

### GetAttributes

`func (o *ManagedCluster) GetAttributes() ManagedClusterAttributes`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *ManagedCluster) GetAttributesOk() (*ManagedClusterAttributes, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *ManagedCluster) SetAttributes(v ManagedClusterAttributes)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *ManagedCluster) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetDescription

`func (o *ManagedCluster) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ManagedCluster) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ManagedCluster) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ManagedCluster) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetRedis

`func (o *ManagedCluster) GetRedis() ManagedClusterRedis`

GetRedis returns the Redis field if non-nil, zero value otherwise.

### GetRedisOk

`func (o *ManagedCluster) GetRedisOk() (*ManagedClusterRedis, bool)`

GetRedisOk returns a tuple with the Redis field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedis

`func (o *ManagedCluster) SetRedis(v ManagedClusterRedis)`

SetRedis sets Redis field to given value.

### HasRedis

`func (o *ManagedCluster) HasRedis() bool`

HasRedis returns a boolean if a field has been set.

### GetClientType

`func (o *ManagedCluster) GetClientType() ManagedClientType`

GetClientType returns the ClientType field if non-nil, zero value otherwise.

### GetClientTypeOk

`func (o *ManagedCluster) GetClientTypeOk() (*ManagedClientType, bool)`

GetClientTypeOk returns a tuple with the ClientType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientType

`func (o *ManagedCluster) SetClientType(v ManagedClientType)`

SetClientType sets ClientType field to given value.


### SetClientTypeNil

`func (o *ManagedCluster) SetClientTypeNil(b bool)`

 SetClientTypeNil sets the value for ClientType to be an explicit nil

### UnsetClientType
`func (o *ManagedCluster) UnsetClientType()`

UnsetClientType ensures that no value is present for ClientType, not even an explicit nil
### GetCcgVersion

`func (o *ManagedCluster) GetCcgVersion() string`

GetCcgVersion returns the CcgVersion field if non-nil, zero value otherwise.

### GetCcgVersionOk

`func (o *ManagedCluster) GetCcgVersionOk() (*string, bool)`

GetCcgVersionOk returns a tuple with the CcgVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcgVersion

`func (o *ManagedCluster) SetCcgVersion(v string)`

SetCcgVersion sets CcgVersion field to given value.


### GetPinnedConfig

`func (o *ManagedCluster) GetPinnedConfig() bool`

GetPinnedConfig returns the PinnedConfig field if non-nil, zero value otherwise.

### GetPinnedConfigOk

`func (o *ManagedCluster) GetPinnedConfigOk() (*bool, bool)`

GetPinnedConfigOk returns a tuple with the PinnedConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPinnedConfig

`func (o *ManagedCluster) SetPinnedConfig(v bool)`

SetPinnedConfig sets PinnedConfig field to given value.

### HasPinnedConfig

`func (o *ManagedCluster) HasPinnedConfig() bool`

HasPinnedConfig returns a boolean if a field has been set.

### GetLogConfiguration

`func (o *ManagedCluster) GetLogConfiguration() ClientLogConfiguration`

GetLogConfiguration returns the LogConfiguration field if non-nil, zero value otherwise.

### GetLogConfigurationOk

`func (o *ManagedCluster) GetLogConfigurationOk() (*ClientLogConfiguration, bool)`

GetLogConfigurationOk returns a tuple with the LogConfiguration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogConfiguration

`func (o *ManagedCluster) SetLogConfiguration(v ClientLogConfiguration)`

SetLogConfiguration sets LogConfiguration field to given value.

### HasLogConfiguration

`func (o *ManagedCluster) HasLogConfiguration() bool`

HasLogConfiguration returns a boolean if a field has been set.

### SetLogConfigurationNil

`func (o *ManagedCluster) SetLogConfigurationNil(b bool)`

 SetLogConfigurationNil sets the value for LogConfiguration to be an explicit nil

### UnsetLogConfiguration
`func (o *ManagedCluster) UnsetLogConfiguration()`

UnsetLogConfiguration ensures that no value is present for LogConfiguration, not even an explicit nil
### GetOperational

`func (o *ManagedCluster) GetOperational() bool`

GetOperational returns the Operational field if non-nil, zero value otherwise.

### GetOperationalOk

`func (o *ManagedCluster) GetOperationalOk() (*bool, bool)`

GetOperationalOk returns a tuple with the Operational field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperational

`func (o *ManagedCluster) SetOperational(v bool)`

SetOperational sets Operational field to given value.

### HasOperational

`func (o *ManagedCluster) HasOperational() bool`

HasOperational returns a boolean if a field has been set.

### GetStatus

`func (o *ManagedCluster) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ManagedCluster) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ManagedCluster) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ManagedCluster) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetPublicKeyCertificate

`func (o *ManagedCluster) GetPublicKeyCertificate() string`

GetPublicKeyCertificate returns the PublicKeyCertificate field if non-nil, zero value otherwise.

### GetPublicKeyCertificateOk

`func (o *ManagedCluster) GetPublicKeyCertificateOk() (*string, bool)`

GetPublicKeyCertificateOk returns a tuple with the PublicKeyCertificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicKeyCertificate

`func (o *ManagedCluster) SetPublicKeyCertificate(v string)`

SetPublicKeyCertificate sets PublicKeyCertificate field to given value.

### HasPublicKeyCertificate

`func (o *ManagedCluster) HasPublicKeyCertificate() bool`

HasPublicKeyCertificate returns a boolean if a field has been set.

### SetPublicKeyCertificateNil

`func (o *ManagedCluster) SetPublicKeyCertificateNil(b bool)`

 SetPublicKeyCertificateNil sets the value for PublicKeyCertificate to be an explicit nil

### UnsetPublicKeyCertificate
`func (o *ManagedCluster) UnsetPublicKeyCertificate()`

UnsetPublicKeyCertificate ensures that no value is present for PublicKeyCertificate, not even an explicit nil
### GetPublicKeyThumbprint

`func (o *ManagedCluster) GetPublicKeyThumbprint() string`

GetPublicKeyThumbprint returns the PublicKeyThumbprint field if non-nil, zero value otherwise.

### GetPublicKeyThumbprintOk

`func (o *ManagedCluster) GetPublicKeyThumbprintOk() (*string, bool)`

GetPublicKeyThumbprintOk returns a tuple with the PublicKeyThumbprint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicKeyThumbprint

`func (o *ManagedCluster) SetPublicKeyThumbprint(v string)`

SetPublicKeyThumbprint sets PublicKeyThumbprint field to given value.

### HasPublicKeyThumbprint

`func (o *ManagedCluster) HasPublicKeyThumbprint() bool`

HasPublicKeyThumbprint returns a boolean if a field has been set.

### SetPublicKeyThumbprintNil

`func (o *ManagedCluster) SetPublicKeyThumbprintNil(b bool)`

 SetPublicKeyThumbprintNil sets the value for PublicKeyThumbprint to be an explicit nil

### UnsetPublicKeyThumbprint
`func (o *ManagedCluster) UnsetPublicKeyThumbprint()`

UnsetPublicKeyThumbprint ensures that no value is present for PublicKeyThumbprint, not even an explicit nil
### GetPublicKey

`func (o *ManagedCluster) GetPublicKey() string`

GetPublicKey returns the PublicKey field if non-nil, zero value otherwise.

### GetPublicKeyOk

`func (o *ManagedCluster) GetPublicKeyOk() (*string, bool)`

GetPublicKeyOk returns a tuple with the PublicKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicKey

`func (o *ManagedCluster) SetPublicKey(v string)`

SetPublicKey sets PublicKey field to given value.

### HasPublicKey

`func (o *ManagedCluster) HasPublicKey() bool`

HasPublicKey returns a boolean if a field has been set.

### SetPublicKeyNil

`func (o *ManagedCluster) SetPublicKeyNil(b bool)`

 SetPublicKeyNil sets the value for PublicKey to be an explicit nil

### UnsetPublicKey
`func (o *ManagedCluster) UnsetPublicKey()`

UnsetPublicKey ensures that no value is present for PublicKey, not even an explicit nil
### GetEncryptionConfiguration

`func (o *ManagedCluster) GetEncryptionConfiguration() ManagedClusterEncryptionConfig`

GetEncryptionConfiguration returns the EncryptionConfiguration field if non-nil, zero value otherwise.

### GetEncryptionConfigurationOk

`func (o *ManagedCluster) GetEncryptionConfigurationOk() (*ManagedClusterEncryptionConfig, bool)`

GetEncryptionConfigurationOk returns a tuple with the EncryptionConfiguration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEncryptionConfiguration

`func (o *ManagedCluster) SetEncryptionConfiguration(v ManagedClusterEncryptionConfig)`

SetEncryptionConfiguration sets EncryptionConfiguration field to given value.

### HasEncryptionConfiguration

`func (o *ManagedCluster) HasEncryptionConfiguration() bool`

HasEncryptionConfiguration returns a boolean if a field has been set.

### GetAlertKey

`func (o *ManagedCluster) GetAlertKey() string`

GetAlertKey returns the AlertKey field if non-nil, zero value otherwise.

### GetAlertKeyOk

`func (o *ManagedCluster) GetAlertKeyOk() (*string, bool)`

GetAlertKeyOk returns a tuple with the AlertKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertKey

`func (o *ManagedCluster) SetAlertKey(v string)`

SetAlertKey sets AlertKey field to given value.

### HasAlertKey

`func (o *ManagedCluster) HasAlertKey() bool`

HasAlertKey returns a boolean if a field has been set.

### GetClientIds

`func (o *ManagedCluster) GetClientIds() []string`

GetClientIds returns the ClientIds field if non-nil, zero value otherwise.

### GetClientIdsOk

`func (o *ManagedCluster) GetClientIdsOk() (*[]string, bool)`

GetClientIdsOk returns a tuple with the ClientIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientIds

`func (o *ManagedCluster) SetClientIds(v []string)`

SetClientIds sets ClientIds field to given value.

### HasClientIds

`func (o *ManagedCluster) HasClientIds() bool`

HasClientIds returns a boolean if a field has been set.

### GetServiceCount

`func (o *ManagedCluster) GetServiceCount() int32`

GetServiceCount returns the ServiceCount field if non-nil, zero value otherwise.

### GetServiceCountOk

`func (o *ManagedCluster) GetServiceCountOk() (*int32, bool)`

GetServiceCountOk returns a tuple with the ServiceCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceCount

`func (o *ManagedCluster) SetServiceCount(v int32)`

SetServiceCount sets ServiceCount field to given value.

### HasServiceCount

`func (o *ManagedCluster) HasServiceCount() bool`

HasServiceCount returns a boolean if a field has been set.

### GetCcId

`func (o *ManagedCluster) GetCcId() string`

GetCcId returns the CcId field if non-nil, zero value otherwise.

### GetCcIdOk

`func (o *ManagedCluster) GetCcIdOk() (*string, bool)`

GetCcIdOk returns a tuple with the CcId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcId

`func (o *ManagedCluster) SetCcId(v string)`

SetCcId sets CcId field to given value.

### HasCcId

`func (o *ManagedCluster) HasCcId() bool`

HasCcId returns a boolean if a field has been set.

### GetCreatedAt

`func (o *ManagedCluster) GetCreatedAt() SailPointTime`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ManagedCluster) GetCreatedAtOk() (*SailPointTime, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ManagedCluster) SetCreatedAt(v SailPointTime)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *ManagedCluster) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### SetCreatedAtNil

`func (o *ManagedCluster) SetCreatedAtNil(b bool)`

 SetCreatedAtNil sets the value for CreatedAt to be an explicit nil

### UnsetCreatedAt
`func (o *ManagedCluster) UnsetCreatedAt()`

UnsetCreatedAt ensures that no value is present for CreatedAt, not even an explicit nil
### GetUpdatedAt

`func (o *ManagedCluster) GetUpdatedAt() SailPointTime`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *ManagedCluster) GetUpdatedAtOk() (*SailPointTime, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *ManagedCluster) SetUpdatedAt(v SailPointTime)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *ManagedCluster) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### SetUpdatedAtNil

`func (o *ManagedCluster) SetUpdatedAtNil(b bool)`

 SetUpdatedAtNil sets the value for UpdatedAt to be an explicit nil

### UnsetUpdatedAt
`func (o *ManagedCluster) UnsetUpdatedAt()`

UnsetUpdatedAt ensures that no value is present for UpdatedAt, not even an explicit nil

