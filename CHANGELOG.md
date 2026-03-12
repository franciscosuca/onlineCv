## [3.0.0](https://github.com/franciscosuca/onlineCv/compare/v2.1.0...v3.0.0) (2026-03-12)

### ⚠ BREAKING CHANGES

* UI/enhancement and simplify how the information is updated on the project.

### Features

* UI/enhancement and simplify how the information is updated on the project. ([326f14b](https://github.com/franciscosuca/onlineCv/commit/326f14bfdbd3a2c2e6a09d0fa656342ab50ffcb9))

# [2.1.0](https://github.com/franciscosuca/onlineCv/compare/v2.0.0...v2.1.0) (2026-03-12)


### Bug Fixes

* add HOST to the env. vars and change port and resources required to run the project. ([79ff965](https://github.com/franciscosuca/onlineCv/commit/79ff96512601922f5f96985ada9ae951773d431d))
* add ip and port details. ([23d2708](https://github.com/franciscosuca/onlineCv/commit/23d270824f7e9b5f4c16e6373dc4c0558d52e8b6))
* add pending parameters to container deployment and secure env. vars. ([7945d2e](https://github.com/franciscosuca/onlineCv/commit/7945d2e020c61c6493447657ce460a83c52d61c4))
* added cpu and memory, because this are required since API version '2017-07-01-preview' ([84915d4](https://github.com/franciscosuca/onlineCv/commit/84915d4129fbe9f95258c747faf2ad9e3298c3f6))
* argument name for vars. ([b92bbd1](https://github.com/franciscosuca/onlineCv/commit/b92bbd102fd1ace1e9c99fe37d1cc8e99e8de910))
* Change command for for slim image ([7dc2c25](https://github.com/franciscosuca/onlineCv/commit/7dc2c2570cca7f91dd03bba8548b62b2eeea29a0))
* change image to try to fix error with ACI. ([8381407](https://github.com/franciscosuca/onlineCv/commit/8381407f95e9b780674176b8899c6ee316057760))
* change port to 80 only and decrease resources for ACI. ([ef93e0d](https://github.com/franciscosuca/onlineCv/commit/ef93e0d1251c74740e2d52dab37f3297a4ff626c))
* change restart policy to not meet pull rate policy from docker. ([a475d85](https://github.com/franciscosuca/onlineCv/commit/a475d853ccabea23b7527d99ebb9c0eb298b2eed))
* include hostname and port when running the app. ([cc36bf0](https://github.com/franciscosuca/onlineCv/commit/cc36bf03bb6f57da0b2903e60de5560f27411b62))
* update production image and increase resources. ([84bf98e](https://github.com/franciscosuca/onlineCv/commit/84bf98ef4de527cc51d2e78662b4f4f768d1c338))
* upgrade geist to resolve peer dependency conflict with next@15.x ([#59](https://github.com/franciscosuca/onlineCv/issues/59)) ([29f3072](https://github.com/franciscosuca/onlineCv/commit/29f3072c8a38e21090023f2f2280945314860883))
* use image name without registry on az command. ([de493e7](https://github.com/franciscosuca/onlineCv/commit/de493e7aed0a61cab4dbba51e83b937f4016c425))


### Features

* implement semantic-release with automated GitHub Actions workflow ([#58](https://github.com/franciscosuca/onlineCv/issues/58)) ([0e345c7](https://github.com/franciscosuca/onlineCv/commit/0e345c71e2ce02aa1a60608bbeb7957913375fe1))

# [1.3.0](https://github.com/franciscosuca/onlineCv/compare/v1.2.6...v1.3.0) (2025-04-11)


### Features

* enable embededlinks on the project with iframely. ([7d7132e](https://github.com/franciscosuca/onlineCv/commit/7d7132e52607f775d26c8089772f97c3b16a1fea))

## [1.2.6](https://github.com/franciscosuca/onlineCv/compare/v1.2.5...v1.2.6) (2025-03-21)


### Bug Fixes

* Improve hamburger menu by putting in vertical the  bvbvvbnav-items in vertical ([#23](https://github.com/franciscosuca/onlineCv/issues/23)) ([c96e6a1](https://github.com/franciscosuca/onlineCv/commit/c96e6a1c2980fdbde3ecfe214a1915d66dfc5f4c))

## [1.2.5](https://github.com/franciscosuca/onlineCv/compare/v1.2.4...v1.2.5) (2025-03-20)


### Bug Fixes

* install semantic-release/git in the project. ([4a8324b](https://github.com/franciscosuca/onlineCv/commit/4a8324befc138627e5a305a3c8549c47a537426f))
* move the changelog plugin to attempt to generate changelog file. ([5f14392](https://github.com/franciscosuca/onlineCv/commit/5f14392b6fa3df44d41c569e93b64a78de2856fa))

## [1.2.2](https://github.com/franciscosuca/onlineCv/releases/tag/v1.2.2)


### Features 

* Add semantic release to the project.
* Setup Semantic for auto-generating a changelog.

## [1.1.2](https://github.com/franciscosuca/onlineCv/releases/tag/v1.1.2)


### Features

* Skills page with two graphs.
* Add Hambuger menu for small screens.

## [1.0](https://github.com/franciscosuca/onlineCv/releases/tag/v1.0)


### Features

* About Me page.
* Contact Footer.
* Define format for data (dates, position, location, description).
* Experience pages (Component for pages about my experiences as software engineer).
* Remove files and folders from original template related to blog.
* Experience pages (Component for pages about my experiences as software engineer).
* Remove files and folders from original template related to blog.
* App hosting & deployment pipeline.
