export const UTM_SOURCE_KEY = 'utm_source';
export const UTM_CAMPAIGN_KEY = 'utm_campaign';
export const UTM_MEDIUM_KEY = 'utm_medium';
export const UTM_TERM_KEY = 'utm_term';
export const UTM_CONTENT_KEY = 'utm_content';

export const extractAndSetUtmParamsToLS = search => {
  const queryParams = new URLSearchParams(search);
  [
    UTM_CAMPAIGN_KEY,
    UTM_MEDIUM_KEY,
    UTM_SOURCE_KEY,
    UTM_TERM_KEY,
    UTM_CONTENT_KEY,
  ].forEach(key => {
    const utmVal = queryParams.get(key);
    if (utmVal) {
      localStorage.setItem(key, utmVal);
    }
  });
};

export const getUTMParamsFromLS = () => {
  const utmCampaign = localStorage.getItem(UTM_CAMPAIGN_KEY);
  const utmMedium = localStorage.getItem(UTM_MEDIUM_KEY);
  const utmSource = localStorage.getItem(UTM_SOURCE_KEY);
  const utmTerm = localStorage.getItem(UTM_SOURCE_KEY);
  const utmContent = localStorage.getItem(UTM_SOURCE_KEY);

  return { utmCampaign, utmContent, utmMedium, utmSource, utmTerm };
};
