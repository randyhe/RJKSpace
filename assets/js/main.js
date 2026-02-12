const SITE_CONFIG = {
  email: "hello@rjkspace.com",
  domainLabel: "RJKSpace.com",
  domainUrl: "https://rjkspace.com",
  githubLabel: "github.com/randyhe/RJKSpace",
  githubUrl: "https://github.com/randyhe/RJKSpace",
};

function initHomepage() {
  const emailCta = document.getElementById("email-cta");
  const workCta = document.getElementById("work-cta");
  const contactEmail = document.getElementById("contact-email");
  const contactDomain = document.getElementById("contact-domain");
  const contactGithub = document.getElementById("contact-github");
  const yearNode = document.getElementById("year");

  if (emailCta) {
    emailCta.href = `mailto:${SITE_CONFIG.email}`;
    emailCta.setAttribute("aria-label", `Email ${SITE_CONFIG.email}`);
  }

  if (workCta) {
    workCta.href = `mailto:${SITE_CONFIG.email}?subject=Work%20with%20RJKSpace`;
    workCta.setAttribute("aria-label", "Start a project with RJKSpace");
  }

  if (contactEmail) {
    contactEmail.textContent = SITE_CONFIG.email;
    contactEmail.href = `mailto:${SITE_CONFIG.email}`;
    contactEmail.setAttribute("aria-label", `Email ${SITE_CONFIG.email}`);
  }

  if (contactDomain) {
    contactDomain.textContent = SITE_CONFIG.domainLabel;
    contactDomain.href = SITE_CONFIG.domainUrl;
    contactDomain.setAttribute("aria-label", "Visit RJKSpace.com");
  }

  if (contactGithub) {
    contactGithub.textContent = SITE_CONFIG.githubLabel;
    contactGithub.href = SITE_CONFIG.githubUrl;
    contactGithub.setAttribute("aria-label", "Open GitHub repository placeholder");
  }

  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
}

document.addEventListener("DOMContentLoaded", initHomepage);
