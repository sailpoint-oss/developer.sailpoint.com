# CampaignReportDownload

# CampaignReportDownload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique ID of the campaign report. | 
**DownloadUrl** | **string** | A URL to download the campaign report. A presigned download URL is valid for 90 minutes from the time it is returned. Call this endpoint again to get a new URL.  | 

## Methods

### NewCampaignReportDownload

`func NewCampaignReportDownload(id string, downloadUrl string, ) *CampaignReportDownload`

NewCampaignReportDownload instantiates a new CampaignReportDownload object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignReportDownloadWithDefaults

`func NewCampaignReportDownloadWithDefaults() *CampaignReportDownload`

NewCampaignReportDownloadWithDefaults instantiates a new CampaignReportDownload object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CampaignReportDownload) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CampaignReportDownload) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CampaignReportDownload) SetId(v string)`

SetId sets Id field to given value.


### GetDownloadUrl

`func (o *CampaignReportDownload) GetDownloadUrl() string`

GetDownloadUrl returns the DownloadUrl field if non-nil, zero value otherwise.

### GetDownloadUrlOk

`func (o *CampaignReportDownload) GetDownloadUrlOk() (*string, bool)`

GetDownloadUrlOk returns a tuple with the DownloadUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDownloadUrl

`func (o *CampaignReportDownload) SetDownloadUrl(v string)`

SetDownloadUrl sets DownloadUrl field to given value.



