import { wpFetch } from "./wpFetch";

const HOME_QUERY = `
    query HomePage {
        page(id: "home", idType: URI) {
            homepage {
                hero {
                    heading
                    copy
                    linkText
                    linkUrl
                    heroMeta {
                        email
                        phone
                        location
                    }
                }
                aboutSection {
                    heading
                    copy
                    cvDownload {
                        node {
                            mediaItemUrl
                        }
                    }
                    skillset {
                        skillset1 {
                            skill
                            level
                        }
                        skillset2 {
                            skill
                            level
                        }
                        skillset3 {
                            skill
                            level
                        }
                        skillset4 {
                            skill
                            level
                        }
                        skillset5 {
                            skill
                            level
                        }
                        skillset6 {
                            skill
                            level
                        }          
                    }                                          
                }
            }
        }
    }
`;

export async function getHomepageData() {
    const data = await wpFetch(HOME_QUERY);
    const hero = data?.page?.homepage?.hero;
    const aboutSection = data?.page?.homepage?.aboutSection;

    const rawSkillset = aboutSection.skillset || {};

    const skillsetArray = Object.values(rawSkillset)
        .filter(Boolean)
        .map((item) => ({
            skill: item?.skill || "",
            level: item?.level ?? 0,
        }));    

    if (!hero) {
        throw new Error("Homepage hero data missing in WordPress");
    }
    if (!aboutSection) {
        throw new Error("Homepage about data missing in WordPress");
    }

    return {
        hero: {
            heading: hero.heading || "",
            copy: hero.copy || "",
            linkText: hero.linkText || "",
            linkUrl: hero.linkUrl || "",
            heroMeta: {
                email: hero.heroMeta?.email || "",
                phone: hero.heroMeta?.phone || "",
                location: hero.heroMeta?.location || "",
            },            
        },
        aboutSection: {
            heading: aboutSection.heading || "",
            copy: aboutSection.copy || "",
            cvUrl: aboutSection?.cvDownload?.node?.mediaItemUrl || "",
            skillset: skillsetArray,
        }
    };
}
