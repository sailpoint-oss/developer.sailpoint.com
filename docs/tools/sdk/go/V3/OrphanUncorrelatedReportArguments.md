---
id: orphan-uncorrelated-report-arguments
title: OrphanUncorrelatedReportArguments
pagination_label: OrphanUncorrelatedReportArguments
sidebar_label: OrphanUncorrelatedReportArguments
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'OrphanUncorrelatedReportArguments'] 
slug: /tools/sdk/go/v3/models/orphan-uncorrelated-report-arguments
tags: ['SDK', 'Software Development Kit', 'OrphanUncorrelatedReportArguments']
---

# OrphanUncorrelatedReportArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SelectedFormats** |  Pointer to **[]string** | Output report file formats. This are formats for calling get endpoint as a query parameter &#39;fileFormat&#39;.  In case report won&#39;t have this argument there will be [&#39;CSV&#39;, &#39;PDF&#39;] as default. | [optional] 
**DefaultS3Bucket** |  **bool** | Use it to set default s3 bucket where generated report will be saved.  In case this argument is false and &#39;s3Bucket&#39; argument is null or absent there will be default s3Bucket assigned to the report. | 
**S3Bucket** |  Pointer to **string** | If you want to be specific you could use this argument with defaultS3Bucket &#x3D; false. | [optional] 

## Methods

### NewOrphanUncorrelatedReportArguments

`func NewOrphanUncorrelatedReportArguments(defaultS3Bucket bool, ) *OrphanUncorrelatedReportArguments`

NewOrphanUncorrelatedReportArguments instantiates a new OrphanUncorrelatedReportArguments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrphanUncorrelatedReportArgumentsWithDefaults

`func NewOrphanUncorrelatedReportArgumentsWithDefaults() *OrphanUncorrelatedReportArguments`

NewOrphanUncorrelatedReportArgumentsWithDefaults instantiates a new OrphanUncorrelatedReportArguments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSelectedFormats

`func (o *OrphanUncorrelatedReportArguments) GetSelectedFormats() []string`

GetSelectedFormats returns the SelectedFormats field if non-nil, zero value otherwise.

### GetSelectedFormatsOk

`func (o *OrphanUncorrelatedReportArguments) GetSelectedFormatsOk() (*[]string, bool)`

GetSelectedFormatsOk returns a tuple with the SelectedFormats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelectedFormats

`func (o *OrphanUncorrelatedReportArguments) SetSelectedFormats(v []string)`

SetSelectedFormats sets SelectedFormats field to given value.

### HasSelectedFormats

`func (o *OrphanUncorrelatedReportArguments) HasSelectedFormats() bool`

HasSelectedFormats returns a boolean if a field has been set.

### GetDefaultS3Bucket

`func (o *OrphanUncorrelatedReportArguments) GetDefaultS3Bucket() bool`

GetDefaultS3Bucket returns the DefaultS3Bucket field if non-nil, zero value otherwise.

### GetDefaultS3BucketOk

`func (o *OrphanUncorrelatedReportArguments) GetDefaultS3BucketOk() (*bool, bool)`

GetDefaultS3BucketOk returns a tuple with the DefaultS3Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultS3Bucket

`func (o *OrphanUncorrelatedReportArguments) SetDefaultS3Bucket(v bool)`

SetDefaultS3Bucket sets DefaultS3Bucket field to given value.


### GetS3Bucket

`func (o *OrphanUncorrelatedReportArguments) GetS3Bucket() string`

GetS3Bucket returns the S3Bucket field if non-nil, zero value otherwise.

### GetS3BucketOk

`func (o *OrphanUncorrelatedReportArguments) GetS3BucketOk() (*string, bool)`

GetS3BucketOk returns a tuple with the S3Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetS3Bucket

`func (o *OrphanUncorrelatedReportArguments) SetS3Bucket(v string)`

SetS3Bucket sets S3Bucket field to given value.

### HasS3Bucket

`func (o *OrphanUncorrelatedReportArguments) HasS3Bucket() bool`

HasS3Bucket returns a boolean if a field has been set.


[[Back to top]](#) 


