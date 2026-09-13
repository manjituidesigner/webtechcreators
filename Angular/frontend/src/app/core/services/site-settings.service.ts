import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map } from 'rxjs';

export interface SiteSettings {
  siteLogo?: { node: { sourceUrl: string } };
  siteLogoMobile?: { node: { sourceUrl: string } };
  favicon?: { node: { sourceUrl: string } };
  siteTagline?: string;
  contactPhone?: string;
  contactEmail?: string;
  whatsappNumber?: string;
  address?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  youtubeUrl?: string;
  footerCopyright?: string;
  footerDescription?: string;
  googleMapsUrl?: string;
  defaultSeoTitle?: string;
  defaultSeoDescription?: string;
}

const GET_SITE_SETTINGS = gql`
  query GetSiteSettings {
    page(id: "/site-settings/", idType: URI) {
      siteSettings {
        siteLogo { node { sourceUrl } }
        siteLogoMobile { node { sourceUrl } }
        favicon { node { sourceUrl } }
        siteTagline
        contactPhone
        contactEmail
        whatsappNumber
        address
        facebookUrl
        instagramUrl
        linkedinUrl
        youtubeUrl
        footerCopyright
        footerDescription
        googleMapsUrl
        defaultSeoTitle
        defaultSeoDescription
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class SiteSettingsService {
  constructor(private apollo: Apollo) {}

  getSettings(): Observable<SiteSettings> {
    return this.apollo.watchQuery<any>({
      query: GET_SITE_SETTINGS,
      fetchPolicy: 'network-only' // Always fetch fresh data from WordPress
    }).valueChanges.pipe(
      map(result => result.data?.page?.siteSettings as SiteSettings)
    );
  }
}

